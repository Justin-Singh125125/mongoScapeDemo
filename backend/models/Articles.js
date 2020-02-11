var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var articleSchema = new Schema({
	heading: String,
	info: String,
	link: String,
	isSaved: {
		type: Boolean,
		default:  false
	}
});

// Create the Note model using the noteSchema
var Articles = mongoose.model('Articles', articleSchema);

// Export the Note model
module.exports = Articles;
