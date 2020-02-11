const db = require('../models');
const scrapeScript = require('../scripts/scrape');

module.exports = {
	findAllArticles: async (req, res) => {
		const resultArticles = await db.Articles.find({isSaved: false});
		res.json(resultArticles);
	},
	findAllSavedArticles: async (req, res) => {
		const resultArticles = await db.Articles.find({isSaved: true});
		res.json(resultArticles);
	},
	createArticles: async (req, res) => {
		await db.Articles.deleteMany();
		const scrapeData = await scrapeScript();

		const resultArticles = await db.Articles.insertMany(scrapeData);

		res.json(resultArticles);
	},
	saveArticle: async (req, res) => {
			const updatedArticle =	await db.Articles.updateOne(
			{
				_id: req.params.articleId
			},
			{
				isSaved: true
			})

		res.json(updatedArticle);
	},

};
