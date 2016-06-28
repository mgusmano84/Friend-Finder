//This will link the data in friends.js
var friendsData = require('../data/friends.js');
var path 			= require('path');
var bodyParser = require('body-parser');



//Routing
module.exports = function(app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));
	
	// This will alow you to to see the JSON data of different friends
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	
	
	// app.post('api/friends', function(req, res) {
		
	// });

}