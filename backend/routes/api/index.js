var app = require('express').Router();

const articlesRoute = require('./articles');

app.use('/articles', articlesRoute);

module.exports = app;
