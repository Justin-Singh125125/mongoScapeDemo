const cheerio = require('cheerio');
const axios = require("axios");


axios.get("https://www.usatoday.com/tech/").then((result) => {
    const $ = cheerio.load(result.data);

    const articles = [];

    const articleSection = $("div.gnt_m:nth-child(2)");

    $(articleSection).find(".gnt_m_flm_a").each((i, currentArticle) => {
        const articleObj = {};


        articleObj.heading = $(currentArticle).text().trim();
        articleObj.info = $(currentArticle).attr("data-c-br")
        articleObj.link = `https://www.usatoday.com${$(currentArticle).attr("href")}`


        if (articleObj.heading && articleObj.info) {

            articles.push(articleObj);
        }

    })


    console.log(articles);
})


