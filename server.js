/*
var express = require("express"); 
var app = express.createServer(); 
var port = process.env.PORT || 3000;

app.get("/", function(request, response) { 
  response.send("Hello Engine Yard Cloud!");
});

app.listen(port);
*/
var http = require("http");
var port = process.env.PORT || 3000;
var webServer = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}  );
webServer.listen(port);

