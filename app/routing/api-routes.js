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


	//Routing for friends.js
	app.get('/api/friends', function(req, res) {
		res.json((friendsData));
	});

	
	//This pushes new data into the friends array
	app.post('/api/friends', function(req, res) {
		friendsData.push(req.body);
		res.json(true);
	});

}


