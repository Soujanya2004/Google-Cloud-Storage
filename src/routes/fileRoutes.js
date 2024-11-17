const express = require('express');
const multer = require('multer');
const { uploadFile, listFiles, deleteFile } = require('../controllers/fileController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), uploadFile);
router.get('/', listFiles);
router.delete('/:name', deleteFile);

module.exports = router;
