//This will link the data in friends.js
var friendsData = require('../data/friends.js');
var path 			= require('path');
// var bodyParser = require('body-parser');



//Routing
module.exports = function(app) {


	app.get('/api/friends', function(req, res) {
		res.json((friendsData));
	});

	
	
	app.post('api/friends', function(req, res) {
		
	});

}


