var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);
 


app.use(express.static('public')); 
server.listen(3000);
console.log('server started');

//var PLAYERS = {};

var p1;
var p2;

io.sockets.on('connection', function(socket){
	//PLAYERS[socket.id] = socket;

	console.log(socket.id + ': has connected');

	socket.on("playertwo", function(socketid){

		p2 = socket;
		console.log("Player two is: " + p2.id);
		position();

	});
	socket.on("playerone", function(socketid){

		p1 = socket;
		console.log("Player one is: " + p1.id);
		position();

	});


});

function position(){
	if(p1 != undefined && p2 != undefined)
	{
		p1.on('rocket', function(y){

				//var socket = PLAYERS[i];
			p2.emit('rocket_res', y);

		});
		p2.on('rocket_2', function(y){

				//var socket = PLAYERS[i];
			p1.emit('rocket_2_res', y);

		});
	}
}






