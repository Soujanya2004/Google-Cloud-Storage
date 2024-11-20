# Google Cloud Storage API (MetaBucket) with Node.js and Express.js

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Requirements](#requirements)
* [Dependencies](#dependencies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)
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
2. run npm install @google-cloud-storage express express-router dotenv axios ejs multer mongoose ejs
3. Add your Google Cloud Storage and MongoDB credentials to a .env file
4. Add your Google cloud credentials to a .json file
5. Run the application using node index.js

## API Endpoints

### Upload File

* URL: /api/file/upload
* Method: POST

### Get All Files

* URL: /api/file
* Method: GET


# Contributions

* Designed database schema
* API Development: Created RESTful API endpoints for upload and view files
* Added delete functionality to the files uploaded both in cloud and database
* UI Integration: Added UI for each templates rendered
