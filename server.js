var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.get("/", function (req, res){ res.sendfile('public/home.html');;});
app.get("/insert", insertBook);
app.get("/read", readBook);
app.get("/update", updateBook);
app.listen(1337);

function readBook(req, res)
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
			var document = collection.findOne({'book':'Genesis'},function(err, doc) {
				if (doc){
					console.log(doc);
					console.log(doc.book);
					res.write(JSON.stringify(doc));
					res.end();
				} else {
					console.log('no data for this company');
				}
		});
		});
	  }
	});
}
function insertBook(req, res)
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
		var book1 = {'book':'Genesis', 'chapter':'1', 'detail':' This is content of the books... Verses would follow.. This is only testing ' };
		collection.insert(book1);
    });
	  }
	});
	res.end("It has come to insert");
}

function updateBook(req, res)
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
		var book1 = {'book':'Genesis', 'chapter':'1', 'detail':'This is Book Content... ' };
		collection.insert(book1);
    });
	  }
	});
	res.end("It has come to update");
}



