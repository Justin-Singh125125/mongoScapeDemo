const db = require('../models');
const scrapeScript = require('../scripts/scrape');

module.exports = {
	findAllArticles: async (req, res) => {
		const resultArticles = await db.Articles.find();
		res.json(resultArticles);
	},
	createArticles: async (req, res) => {
		await db.Articles.deleteMany();
		const scrapeData = await scrapeScript();

		const resultArticles = await db.Articles.insertMany(scrapeData);

		res.json(resultArticles);
	}
};
