var express = require('express');
var mysql = require('mysql');
var http = require('http');
var path = require('path');
var socketHandler = require('./socketHandler');

// var db = require('./db');

// // Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
// var router = require('./routes.js');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var localDbConnection = {
  host: 'localhost',
  user: 'hoot',
  password: 'hoot',
  database: 'hoot'
}

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || localDbConnection);

connection.connect();

// // Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '/../client')));

io.on('connection', socketHandler.newConnection);

var port = process.env.PORT || 9000;

server.listen(port, function() {
  console.log('server up and running on port ' + port);
});

module.exports = {
  app: app,
  io: io
}
