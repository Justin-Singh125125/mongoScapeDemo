var app = require('express').Router();
const commentsController = require('../../controllers/commentsController');




app.route("/")
.get(commentsController.findAllComments)
.post(commentsController.createComment)


app.route("/:articleId")
.get(commentsController.findArticleComments)

module.exports = app;
