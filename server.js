/*
var express = require("express"); 
var app = express(); 
var port = process.env.PORT || 3000;
var mangodb_var = require("mongodb"); 

app.get("/", function(request, response) { 
	response.send("Hello Engine Yard Cloud!--- It looks like express is installed...");
	
response.end();
});
app.listen(port);

*/
output = "";
var http = require("http");
var port = process.env.PORT || 3000;

var a = function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("+++++ Starting the connection  ++++++ ");
	for (property in request) {
      //output += property + ': ' + request[property]+'; ';
    }
    //console.log(output);
	//b();
	response.write("....." + b() + ".....");
	response.end();
};

function b()
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

var db = new Db('integration_tests', new Server("127.0.0.1", 27017,
 {auto_reconnect: false, poolSize: 4}), {native_parser: false});

// Establish connection to db
db.open(function(err, db) {

	
  var collection = db.collection("simple_document_insert_collection_no_safe",  
  function(err, col2) {
    assert.equal(null, err);	
	for (property in col2) {
     // output += property + ':::::::::::::::::::::::::::::::::::::::::::::::::::::: ' + col2[property]+'; ';
    }
	col2.insert({hello:'world_no_safe'},function(err, col2) {
    assert.equal(null, err);});		
		setTimeout(function() {

    // Fetch the document
    col2.findOne({hello:'world_no_safe'}, function(err, item) {
      assert.equal(null, err);
      assert.equal('world_no_safe', item.hello);
	  
	output = "";
	for (property in item) {
      output += property + '::::::: ' + item[property]+'; ';
    }
	  //console.log(output);
      db.close();
    })
  }, 1000);
  }
		
	);

});
	return output;
}	


var webServer = http.createServer(a);
webServer.listen(port);