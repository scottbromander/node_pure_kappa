var http = require('http');
var greeting = require("./greeting.js");
var addSomeRandomNumbers = require("./addSomeNumbers.js");

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(addSomeRandomNumbers().toString());
    res.end();
}).listen(8000);
