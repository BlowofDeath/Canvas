var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);
 


app.use(express.static('public')); 
server.listen(3000);
console.log('server started');

var PLAYERS = {};

io.sockets.on('connection', function(socket){
	socket.id = Math.random();

	socket.on('rocket', function(y){
		socket.emit('rocket_res', y);
		console.log('connected' + y);
	});
});

