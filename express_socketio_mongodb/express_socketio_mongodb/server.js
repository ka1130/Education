var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var dbUrl = 'mongodb://user:password1@ds151012.mlab.com:51012/learning-node';

var Message = mongoose.model('Message', {
  name: String,
  message: String
});

app.get("/messages", (request, response) => {
  Message.find({}, (error, messages) => {
    response.send(messages);
  });
});

app.post("/messages", (request, response) => {
  var message = new Message(request.body);

  message.save((error) => {
    if (error) {
      sendStatus(500)
    } 
    // messages.push(request.body);
    io.emit('message', request.body);
    response.sendStatus(200);
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

mongoose.connect(dbUrl, {useNewUrlParser: true}, (error) => {
  console.log('mongodb connection', error);
});

var server = http.listen(3000, () => {
  console.log('server is listening on port', server.address().port);
});