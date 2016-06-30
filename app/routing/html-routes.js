var path = require('path');


// Routes

module.exports = function(app){

	


	//This will get you to the survey page
	app.get('/survey', function(req, res){
		
		
		res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
	})

	app.get('/', function(req, res){
		
		
		res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
	})

	// // default page
	// app.use(function(req, res) {
	// 	res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
	// });


};
