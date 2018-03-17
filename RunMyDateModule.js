var http = require('http');
var dt = require('./MyDateModule');


//The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
http.createServer(function (req, res) {
    console.log("Open http://lcoalhost:8080 on your browser.");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime() + "</br>");    
    res.write("Getting request URL : " + req.url + "</br>");    
    res.end('Hello World!</br>');
}).listen(8080);