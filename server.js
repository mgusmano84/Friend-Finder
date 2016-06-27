// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

require('./app/routing/html-routes.js')(app); 

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//sets up external routes
app.use(express.static(path.join(__dirname, 'app', 'public')));



app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})