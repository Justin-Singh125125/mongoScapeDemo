var app = require('express').Router();

const articlesRoute = require('./articles');
const commentsRoute = require("./comments");

app.use('/articles', articlesRoute);
app.use('/comments', commentsRoute)

module.exports = app;
