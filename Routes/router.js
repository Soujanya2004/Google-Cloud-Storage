const express = require('express');
const multer = require('multer');
const { uploadFile, getFiles, deleteFile, showDelPage, showUpPage } = require('../Controllers/controller.js');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.route('/upload')
    .get(showUpPage)  
    .post(upload.single('file'), uploadFile);   


router.route('/delete')
    .get(showDelPage)   
    .delete(deleteFile);   

router.get('/', getFiles);

module.exports = router;
