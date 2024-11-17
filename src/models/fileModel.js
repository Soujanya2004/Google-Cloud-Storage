const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  size: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', fileSchema);
