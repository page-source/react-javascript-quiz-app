var express = require('express');
var app = express();

var bodyParser = require('body-parser'); //BODY Parser - lets us use the req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose = require('mongoose'); //  MongoDB

var promise = mongoose.connect('mongodb://localhost/my_db', {
  useMongoClient: true,
  /* other options */
});
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', ' * ');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent questions
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
var router = express.Router();
var Question = require('./../models/schema.js');

router.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests


router.route('/people')
	.get(function(req, res) {
	//looks at our Question Schema
		Question.find(function(err, dataFromDB) {
			if (err){
				res.send(err);
			}
			//responds with a json object of our database questions.
			res.json(dataFromDB);
		});
 	})
 	//post new question to the database
 	.post(function(req, res) {
 		var question = new Question();
 		question.question = req.body.question;
		question.options 	= req.body.options;
		question.key 		= req.body.key;

		question.save(function(err) {
	 		if (err)
	 			res.send(err);
	 		res.json({ message:'Question successfully added!' });
 		});
 	});


app.listen(3001, function() {
	console.log('Api successfully running');
});
