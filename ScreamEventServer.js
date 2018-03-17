var events = require('events');
var http = require('http');
var url = require('url');

var eventEmitter = new events.EventEmitter();
//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  
  //Assign the event handler to an event:
  eventEmitter.on('scream', myEventHandler);

http.createServer(function (req, res) {
    console.log("Open http://localhost:8080/Summer.html on your browser.");
    var q = url.parse(req.url, true);
    console.log('Pathname section of the URL: ' + q.pathname); 

    if(q.pathname == '/scream'){
        //Fire the 'scream' event:
        eventEmitter.emit('scream');
    }   
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hi');
    res.end();
}).listen(8080);



