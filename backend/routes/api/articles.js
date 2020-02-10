var app = require('express').Router();
const articlesController = require('../../controllers/articlesController');

app
	.route('/')
	.get(articlesController.findAllArticles)
	.post(articlesController.createArticles);
module.exports = app;
