const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

var PORT = process.env.PORT || 3001;

// Instantiate our Express App
var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
	console.log('Listening on port: ' + PORT);
});
