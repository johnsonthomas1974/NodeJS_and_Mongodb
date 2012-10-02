
var express = require("express"); 
var app = express(); 
var port = process.env.PORT || 3000;

app.get("/", function(request, response) { 
  response.send("This is the test... nothting more or less");
});

app.listen(port);
/*
var http = require("http");
var port = process.env.PORT || 3000;
var webServer = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}  );
webServer.listen(port);
*/

