var http = require('http');
var path = require('path');


var socketio = require('socket.io');
var express = require('express');


var router = express();
var server = http.createServer(router);


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log(`Listening at ${addr.address} : ${addr.port}`);
});

//router.get('/', (req, res) => res.send('Hello World!'))
router.use(express.static(__dirname + '/client'));