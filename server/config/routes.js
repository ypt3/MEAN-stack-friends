var friends = require('./../controllers/friends.js');

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/friends', function(req, res){
		friends.show(req, res);
	});

	app.post('/save', function(req, res){
		friends.saveFriend(req, res);
	});

	app.delete("/destroy_friend/:_id", function(req, res){
		friends.destroy(req, res);
	});

	app.put("/friends", function(req, res){
		friends.patch(req, res);
	});

};
