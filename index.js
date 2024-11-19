const express = require('express');
const path = require('path');
const { connect } = require('./connect');
const uploadRouter = require('./Routes/router.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect(uri);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.use('/api/file', uploadRouter);

app.listen(port, async () =>
    console.log(`Server is running on http://localhost:${port}/api/file/upload`))
    .on('error', (err) => console.error("Failed to start server:", err.message));
