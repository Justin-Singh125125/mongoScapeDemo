const db = require('../models');


module.exports = {
    findArticleComments: async (req,res)=>{

        const resultComments = await db.Comments.find({articleId: req.params.articleId});
        res.json(resultComments);
     },
    findAllComments: async (req,res)=>{
       const resultComments = await db.Comments.find();
       res.json(resultComments);
    },
    createComment: async (req,res)=>{
        const createComment = await db.Comments.create(req.body);
        res.json(createComment);
    },

};
