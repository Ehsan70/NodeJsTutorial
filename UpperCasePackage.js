var http = require('http');
var uc = require('upper-case');
var url = require('url');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log('upper casing the text ' + q.pathname);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('upper case of ' + g.pathname + ' is ' + uc(q.pathname));
    res.end();
}).listen(8080);