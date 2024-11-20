# MetaBucket - A Cloud Storage API

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Requirements](#requirements)
* [Dependencies](#dependencies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)
* [MongoDB Schema](#mongodb-schema)
* [Contributions](#contributions)

## Introduction

This project performs CRUD operations using Node.js and Express.js in Google Cloud Storage Bucket. It also pushes file metadata to a MongoDB database.

## Features

* Upload files to the bucket
* Retrieve file metadata (name, size, type, upload url, created, and last modified)
* Push file metadata to a MongoDB database
* Perform CRUD operations using API endpoints

## Requirements

* Node.js
* Express.js
* MongoDB
* Google Cloud Storage

## Dependencies

* @google-cloud-storage
* express
* mongoose
* multer
* axios
* dotenv
* ejs
* express-router
* nodemon (optional)

## Setup

1. Clone the repository
2. ```javascript npm install @google-cloud-storage express express-router dotenv axios ejs multer mongoose ejs```
3. Add your Google Cloud Storage credentials to a `.env` file
4. Add your MongoDB credentials to a `.json` file
5. Run the application using `node index.js`

## API Endpoints

### Upload File

* URL: `/api/file/upload`
* Method: `POST`

### Get All Files

* URL: `/api/file`
* Method: `GET`

## MongoDB Schema

```javascript
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
```

# Contributions

* Added EJS functionality for dynamic page rendering
* Added Axios functionality for api requests
* Modified and fixed the functionality to upload files into Google Cloud Storage bucket
* Modified the 'uploadfile.ejs', 'getfiles.ejs', and 'uploaded.ejs' files to add functionality for navigating between them
