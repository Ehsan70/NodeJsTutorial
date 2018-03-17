var http = require('http');
var dt = require('./MyDateModule');
var url = require('url');
var fs = require('fs');


//The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime() + "</br>");    
    res.write("Getting request URL : " + req.url + "</br>");    
    res.end('Hello World!</br>');


    console.log('Sending response. Text is '+txt);
}).listen(8080);