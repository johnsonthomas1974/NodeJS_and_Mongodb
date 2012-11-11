var express = require("express"); 
var app = express(); 
var port = process.env.PORT || 3000;

app.get("/", function(request, response) { 
	response.write("Hello Engine Yard Cloud!--- It looks like express is installed...");
	response.write("Start++++++++ ");
	db_method_calls(request, response);
});
app.listen(port);

/*
var output = "";
var http = require("http");
var port = process.env.PORT || 3000;

var a = function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	//response.write("+++++ Starting the connection  ++++++ ");
	for (property in request) {
      //output += property + ': ' + request[property]+'; ';
    }
    //console.log(output);
	//b();
	response.write("Start++++++++ ");
	db_method_calls(request, response);
};
var webServer = http.createServer(a);
webServer.listen(port);
*/
function db_method_calls(request, response)
{
	
	var Db = require('mongodb').Db,
	Server = require('mongodb').Server,
	ReplSetServers = require('mongodb').ReplSetServers,
	ObjectID = require('mongodb').ObjectID,
	Binary = require('mongodb').Binary,
	GridStore = require('mongodb').GridStore,
	Code = require('mongodb').Code,
	BSON = require('mongodb').pure().BSON,
	assert = require('assert');

var db = new Db('JTDB', new Server("127.0.0.1", 27017,
 {auto_reconnect: false, poolSize: 4}), {native_parser: false});

// Establish connection to db
db.open(function(err, db) {
  var collection = db.collection("ABC",  
  function(err, col2) {
    assert.equal(null, err);	
	col2.insert({hello:'world_no_safe', a:2, c:4,d:"MyName"},function(err, col2,req) {
    assert.equal(null, err);});		
	setTimeout(function() {
    // Fetch the document
    col2.findOne({hello:'world_no_safe'}, function(err, item) {
      assert.equal(null, err);
      assert.equal('world_no_safe', item.hello);
	  
	output = "";
	for (property in item) {
      output += property + ':::: ' + item[property]+'; ';
    }
	console.log(output);
	response.write( output);
	response.write("  ++++++End");
	response.end();
	db.close();
    })
  }, 1000);
  
  col2.find({"a":2}, {a:1}).toArray(function(err, items) { 
	console.log(items);
  } );
  
  });
});
}	