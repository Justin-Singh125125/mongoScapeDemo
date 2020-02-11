var app = require('express').Router();
const articlesController = require('../../controllers/articlesController');

app
	.route('/')
	.get(articlesController.findAllArticles)
	.post(articlesController.createArticles)
	.put(articlesController.saveArticle)


app.route("/:articleId")
	.put(articlesController.saveArticle);

app.route('/saved')
.get(articlesController.findAllSavedArticles)

module.exports = app;
