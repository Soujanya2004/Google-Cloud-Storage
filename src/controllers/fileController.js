const { Storage } = require('@google-cloud/storage');
const path = require('path');
const File = require('../models/fileModel');

// Google Cloud Storage configuration
const storage = new Storage({
  keyFilename: path.join(__dirname, '../config/serviceAccountKey.json'),
  projectId: process.env.GCLOUD_PROJECT_ID
});

const bucket = storage.bucket(process.env.GCLOUD_BUCKET_NAME);

// Upload File
exports.uploadFile = async (req, res) => {
  try {
    const { originalname, buffer, size } = req.file;
    const blob = bucket.file(originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
      return res.status(500).json({ error: err.message });
    });

    blobStream.on('finish', async () => {
      await blob.makePublic();
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

      // Save file details to MongoDB
      const file = new File({ name: originalname, size });
      await file.save();

      res.status(200).json({ message: 'File uploaded successfully', publicUrl });
    });

    blobStream.end(buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List Files
exports.listFiles = async (req, res) => {
  try {
    const [files] = await bucket.getFiles();
    const fileDetails = files.map(file => ({
      name: file.name,
      size: file.metadata.size,
      type: file.metadata.contentType,
      created: file.metadata.timeCreated,
      updated: file.metadata.updated
    }));

    res.status(200).json(fileDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete File
exports.deleteFile = async (req, res) => {
  try {
    const fileName = req.params.name;
    const file = bucket.file(fileName);
    await file.delete();

    // Remove file record from MongoDB
    await File.deleteOne({ name: fileName });

    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
