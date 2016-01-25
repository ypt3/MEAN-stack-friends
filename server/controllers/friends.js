var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function(){
	return {
		show: function(req, res){
			Friend.find({}, function(err, results){
				if (err) {
					console.log("Mongo cannot show friends:", err);
				} else {
					res.json(results);
				}
			});
		},

		saveFriend: function(req, res){
			var friend = new Friend(req.body);

			friend.save(function(err){
				if (err) {
					console.log("Fail to add friend");
				} else {
					console.log("successfully add a friend");
					res.redirect('/');
				}
			});
		},

		destroy: function(req, res){

			Friend.remove({_id: req.params._id}, function(err){
				if (err) {
					console.log("Delete error:", err);
				} else {
					console.log("Delete friend!");
					res.end();
				}

			});
		},

		patch: function(req, res){
			console.log(req.body);
			Friend.update({_id: req.body}, {$set: {name: req.body.name, age: req.body.age}}, function(err){
				// console.log("hello");
				// console.log(req.body);
				if (err) {
					console.log(err);
				} else {
					console.log("update fine");
					res.end();
				}
			});
		}
	};

})();
