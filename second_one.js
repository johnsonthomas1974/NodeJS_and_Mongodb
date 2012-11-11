var http = require('http').createServer();
http.on('request', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is new program..\n');
})
http.on('listening',function () {
  console.log("hey it is starting listening");
})

http.on('close',function () {
  console.log("hey it is getting close");
})
http.listen(1337);
