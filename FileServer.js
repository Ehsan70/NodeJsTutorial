var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('SamplePage.html', function(err, data) {
    console.log("Open http://lcoalhost:8080 on your browser.");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);