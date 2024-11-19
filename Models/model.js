const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    url: {
        type: String,
    }
},
    { timestamps: { type: Date, default: Date.now } });

const fileModel = mongoose.model('File', fileSchema);

module.exports = { fileModel };