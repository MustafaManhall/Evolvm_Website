const express = require('express');
const path = require('path');
const router = require('./routes/routes');
// const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//app.use(bodyParser.json());

app.use(morgan('dev'));
// app.use(morgan('combined')); 

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'client','build')));

// Use the home routes for the API
app.use(router);

// Catch-all route to serve React app for non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build' , 'index.html'));
  });

const port = process.env.PORT || 4000;
app.listen(port, (res,req) => {
    console.log(`App is listening on port ${port}`);
});
