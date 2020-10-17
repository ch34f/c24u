/* eslint-env jquery, browser */
/*
$(document).ready(() => {

  var socket = io();
  socket.on('connect', function(){
    console.log('Connected socket.io in client')
  });

  socket.on('event', function(data){
    console.log('socket.io on event')
  });

  socket.on('disconnect', function(){});

});
*/

$(function () {
  var socket = io();

  $('form').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });

  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });

  socket.on('connect', function () {
    console.log('client is connected');
    socket.emit('client', 'I am connect');
  })

  socket.on('disconnect', function () {
    console.log('client is disconnected');
  })

});
