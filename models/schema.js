const mongoose = require('mongoose');

// creating new instance of the mongoose.schema.
// the schema takes an object that shows the shape of your database entries.
const questionSchema = mongoose.Schema(
  {
    question: String,
    options: Array,
    key: Number,
  },
  { collection: 'quiz' }
);

//exporting our module to use in server.js
const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
