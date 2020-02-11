var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var commentSchema = new Schema({
	comment: String,
	articleId: Schema.Types.ObjectId
});

// Create the Note model using the noteSchema
var Comments = mongoose.model('Comments', commentSchema);

// Export the Note model
module.exports = Comments;
