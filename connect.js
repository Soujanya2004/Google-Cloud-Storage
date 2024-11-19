const mongoose = require('mongoose');
const { fileModel } = require('./Models/model.js');
require('dotenv').config();

const connect = async function(url) {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB database');
    }
    catch (error) {
        console.error('Failed to connect to MongoDB database:', error.message);
        process.exit(1);
    }
    finally {
        console.log('Reached end of connection');
    }
}

module.exports = { connect: connect};