var io = require('./server').io;
var db = require('./db');
var connectedUsers = {};

var register = function(profile) {
  connectedUsers[profile] = this;
}

var isConnected = function(userId) {
  return userId in connectedUsers;
}

exports.newConnection =  function (socket) {
  socket.on('registered', register.bind(socket));

  socket.on('send message', function (message) {
    var recipient = message.recipientId;
    var recipientType = message.recipientType;

    if (recipientType === 'G') {
      io.to(recipient).emit('get message', message);
    } else if (recipientType === 'U') {
      if (isConnected(recipient)) {
        connectedUsers[recipient].emit('get message', message);
      }
    }

    db.Message.addMessage(message);

  });

  socket.on('create group', function (group) {
    // create group in database

      // respond via socket to group memeber
  });
};
