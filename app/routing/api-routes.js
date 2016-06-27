// var path 			= require('path');
// var bodyParser = require('body-parser');



//This will link the data in friends.js
var friendsData = require('../data/friends.js');



//Routing
module.exports = function(app) {
	
	// This will alow you to to see the JSON data of different friends
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	
	
	app.post('api/friends', function(req, res) {
		
	});

}