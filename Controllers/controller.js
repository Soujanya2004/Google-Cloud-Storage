const { Storage } = require('@google-cloud/storage');
require('dotenv').config();
const { fileModel } = require('../Models/model.js');
const bktName = process.env.GCLOUD_BUCKET_NAME;

const storage = new Storage({
    keyFilename: process.env.GCLOUD_KEYFILE_PATH,
    projectId: process.env.GCLOUD_PROJECT_ID,
});

const bucket = storage.bucket(bktName);

const showUpPage = async function (req, res) {
    try {
        res.render('uploadfile');
    } catch(error) {
        res.render('error', { message: error.message });
    }
};

const uploadFile = async function (req, res) {
    const upFile = req.file;
    try {
        if (!upFile) {
            return res.render('error', { message: "No file uploaded" });
        }

        const { originalname, buffer, size } = upFile;
        const blob = bucket.file(originalname);
        const blobStream = blob.createWriteStream();

        blobStream.on('error', (err) => {
            console.error('Error writing to bucket:', err);
            return res.render('error', { message: err.message });
        });

        blobStream.on('finish', async () => {
            await blob.makePublic();
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            
            // Create a new instance of your File model
            const nfile = new fileModel({ name: originalname, size: size, url: publicUrl });
            try {
                await nfile.save();
                res.render('uploaded', { message: publicUrl });
            } catch (saveError) {
                console.error('Error saving file to database:', saveError);
                res.render('error', { message: saveError.message });
            }
        });

        blobStream.end(buffer);
    } catch (err) {
        console.error('Error uploading file:', err);
        res.render('error', { message: err.message });
    }
};

const getFiles = async function (req, res) {
    try {
        const [files] = await bucket.getFiles();
        const fileDetails = files.map(file => ({
            name: file.name,
            size: file.metadata.size,
            type: file.metadata.contentType,
            created: file.metadata.timeCreated,
            updated: file.metadata.updated,
            publicUrl: `https://storage.googleapis.com/${bucket.name}/${file.name}`,
        }));
        res.render('getfiles', { files: fileDetails });
    } catch (err) {
        res.render('error', { message: err.message});
    }
};

const deleteFile = async (req, res) => {
    try {
        const { fileName } = req.params; // Get the file name from the query string

        if (!fileName) {
            return res.status(400).json({ message: "No file name provided" });
        }

        // Delete the file from Google Cloud Storage
        const file = bucket.file(fileName);
        await file.delete();
        console.log(`Deleted file from Google Cloud Storage: ${fileName}`);

        // Delete the file record from MongoDB
        const deleteResult = await fileModel.deleteOne({ name: fileName });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ message: `File record not found in MongoDB: ${fileName}` });
        }
        console.log(`Deleted file record from MongoDB: ${fileName}`);

        // Return a success response
        res.status(200).json({ message: `File ${fileName} deleted successfully.` });
        } catch (err) {
        console.error('Error deleting file:', err);
        res.status(500).json({ message: `Error deleting file: ${err.message}` });
    }
};


module.exports = { showUpPage, uploadFile, getFiles, deleteFile };