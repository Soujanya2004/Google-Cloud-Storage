# Google Cloud Storage API with Node.js and Express.js

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Requirements](#requirements)
* [NPM Packages/Dependencies](#npm_packages_dependencies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)
* [MongoDB Schema](#mongodb-schema)

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

## NPM Packages/Dependencies

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
2. ```javascript 
npm install @google-cloud-storage express express-router dotenv axios ejs multer mongoose ejs
    ```
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
