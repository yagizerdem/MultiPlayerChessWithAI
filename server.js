class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return null; // Queue is empty
      }
      return this.items.shift();
    }
  
    // Return the front element without removing it
    front() {
      if (this.isEmpty()) {
        return null; // Queue is empty
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the elements of the queue
    print() {
      console.log(this.items);
    }
  }

const { Socket } = require('engine.io');
var express = require('express');
var app = express();
const port = process.env.PORT || 5500
var server = app.listen(port);
//var server = app.listen(3000);
app.use(express.static('public'));//folder name = public 
var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

const queue = new Queue();
const allPlayers = {}
var loop;
// static details 
const Color ={
    White : 0,
    Black : 1
}

function newConnection(socket){
    const player = CreateNewPlayer(socket.id)
    allPlayers[socket.id] = player

    socket.on('disconnect' , ()=>{
        var opponent_socket_id = allPlayers[socket.id].opponentsocketid
        if(allPlayers[opponent_socket_id] != undefined || allPlayers[opponent_socket_id] != null){
          socket.to(opponent_socket_id).emit("opponentleave")
        }
        delete allPlayers[socket.id];
    })
    socket.on('matchrequest' , ()=>{
      queue.enqueue(allPlayers[socket.id])
      if(queue.size() == 2){
        loop = setInterval(MatchMakingAlgorithm , 1000)
      }

    })
    socket.on('pieceMoved', (DTO)=>{
      var opponent_socket_id = allPlayers[socket.id].opponentsocketid
      if(allPlayers[opponent_socket_id] != undefined || allPlayers[opponent_socket_id] != null){
        socket.to(allPlayers[socket.id].opponentsocketid).emit("opponentMove" , DTO)
      }

    })
    socket.on('chat', (data) =>{
      var opponent_socket_id = allPlayers[socket.id].opponentsocketid
      if(allPlayers[opponent_socket_id] != undefined || allPlayers[opponent_socket_id] != null){
        socket.to(allPlayers[socket.id].opponentsocketid).emit("chat" , data)
      }

    })
    socket.on('chechmate',()=>{
      console.log("girdi")
      var opponent_socket_id = allPlayers[socket.id].opponentsocketid
      if(allPlayers[opponent_socket_id] != undefined || allPlayers[opponent_socket_id] != null){
        socket.to(allPlayers[socket.id].opponentsocketid).emit("oppoenntwin")
      }

    })
}
function CreateNewPlayer(socketid){
    const player = {
        socketid : socketid,
        opponentsocketid : null,
        color : null
    }
    return player
}
function MatchMakingAlgorithm(){
  if(queue.size() < 2){
    clearInterval(loop)
    return;
  }
  const player1 = queue.dequeue()
  // sanity check
  if(allPlayers[player1.socketid] == null || allPlayers[player1.socketid] == undefined ){
    return;
  }
  const player2 = queue.dequeue()
  if(allPlayers[player2.socketid] == null || allPlayers[player2.socketid] == undefined ){
    queue.enqueue(allPlayers[player1.socketid])
    return;
  }
  // player variables
  player1.opponentsocketid = player2.socketid
  player1.Color = Color.White
  player2.opponentsocketid = player1.socketid
  player2.Color = Color.Black
  console.log("found")
  io.to(player1.socketid).emit("matchfound" , player1.Color)
  io.to(player2.socketid).emit("matchfound" , player2.Color)
}