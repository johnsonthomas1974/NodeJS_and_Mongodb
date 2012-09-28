var http = require("http");

function onRequest(request, response) {
  console.log("Request received. 1");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(80);

console.log("Server has started.");