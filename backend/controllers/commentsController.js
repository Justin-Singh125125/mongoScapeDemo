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
        console.log(req.body.articleId)

        const where = {_id: req.body.articleId};
        const updateData={ $push: {comments: createComment._id}}

        await db.Articles.findOneAndUpdate(where,updateData);
        res.json(createComment);
    },

};
