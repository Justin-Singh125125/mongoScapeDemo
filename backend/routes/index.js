var app = require('express').Router();
var apiRoutes = require('./api');

app.use('/api', apiRoutes);

module.exports = app;
