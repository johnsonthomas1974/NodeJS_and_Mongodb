var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.get("/", function (req, res){ res.sendfile('public/home.html');;});
app.get("/chapter_1", serverJSON);
app.listen(1337);
function serverJSON(req, res)
{
	//res.sendfile('public/chapter_1.json');
	var mongo = require('mongodb'),
	Server = mongo.Server,
	Db = mongo.Db;

	var server = new Server('localhost', 27017, {auto_reconnect: true});
	var db = new Db('json_repo', server);

	db.open(function(err, db) {
	  if(!err) {
		console.log("We are connected");
		db.collection('book_list', function(err, collection) {
		var book1 = {'title':'Genesis', 'content':'This is the content' };
		var book2 = {'title':'Exodus', 'content':'This is another content' };
		var bookArray = [
			{'title':'Leviticus', 'content':'This is the content' }, 
			{'title':'Dueteronomy', 'content':'This is another content' }
			];

		collection.insert(book1);

		collection.insert(book2, {safe:true}, function(err, result) {});

		collection.insert(bookArray, {safe:true}, function(err, result) {});
    });
	  }
	});
}
