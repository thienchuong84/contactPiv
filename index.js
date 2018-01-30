const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// connect mongoose to our database
const config = require('./config');
mongoose.connect(config.database);

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', () => {
    console.log('connect mlab success');
});

var contacts = require('./routes/contacts');

// Initialize ouw app variable
const app = express();

// declaring port
const port = 3007;

// middleware for CORS
app.use(cors());

// middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// express.static is a built in middleware function to serve static files.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
    response.send("Invalid page");
});

app.use('/contacts', contacts);

// listen port 3006
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});