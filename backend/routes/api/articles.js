var app = require('express').Router();
const articlesController = require('../../controllers/articlesController');

app
	.route('/')
	.get(articlesController.findAllArticles)
	.post(articlesController.createArticles)
	.put(articlesController.saveArticle)


app.route("/:articleId")
	.get(articlesController.findOneArticle)
	.put(articlesController.saveArticle);

app.route('/saved')
.get(articlesController.findAllSavedArticles)

module.exports = app;
