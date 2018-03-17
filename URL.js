var http = require('http');
var dt = require('./MyDateModule');
var url = require('url');
var fs = require('fs');


//The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
http.createServer(function (req, res) {
    console.log("Open http://localhost:8080/Summer.html on your browser.");
    var q = url.parse(req.url, true);
    console.log('Host section of the URL: '+q.host); //returns 'localhost:8080'
    console.log('Pathname section of the URL: ' + q.pathname); //returns '/default.htm'
    console.log('Search section of the URL: ' + q.search); //returns '?year=2017&month=february'


    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);