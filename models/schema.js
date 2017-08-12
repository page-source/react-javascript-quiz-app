var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// creating new instance of the mongoose.schema. the schema takes an object that shows the shape of your database entries.
var questionSchema = mongoose.Schema(
	{
	    question:  	String,
	    options :  	Array,
	    key		: 	Number
	},
	{collection : 'quiz'});


//exporting our module to use in server.js
var Question = mongoose.model("Question", questionSchema);
module.exports = Question;
