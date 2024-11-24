# Google Cloud Storage API (MetaBucket) with Node.js and Express.js

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Requirements](#requirements)
* [Dependencies](#dependencies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)
* [Contributions](#contributions)
* [Screenshots](#Screenshots)

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

# Contributions(soujanya)

* Designed database of the project
* API Development: Created RESTful API endpoints for upload and view files
* Added delete functionality to the files uploaded both in cloud and database
* UI Integration: Added UI for each templates rendered

# Contributions (jay)

* Added EJS functionality for dynamic page rendering
* Added Axios functionality for api requests
* Modified and fixed the functionality to upload files into Google Cloud Storage bucket
* Modified the 'uploadfile.ejs', 'getfiles.ejs', and 'uploaded.ejs' files to add functionality for navigating between them

## Screenshots
![Screenshot](https://raw.githubusercontent.com/Soujanya2004/Google-Cloud-Storage/main/Screenshot%20(304).png "Screenshot Example")
![Screenshot of Feature](https://raw.githubusercontent.com/Soujanya2004/Google-Cloud-Storage/main/Screenshot%20(305).png "Screenshot Example")
![Screenshot](https://raw.githubusercontent.com/Soujanya2004/Google-Cloud-Storage/main/Screenshot%20(306).png "Screenshot Example")



