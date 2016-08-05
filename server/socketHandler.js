var io = require('./server').io;
var connectedUsers = {};

var register = function(profile) {
  connectedUsers[profile] = this;
}

exports.newConnection =  function (socket) {
  socket.on('registered', register.bind(socket));

  socket.on('send message', function (message) {
    connectedUsers[message.recipientId].emit('get message', message);
  });
};
