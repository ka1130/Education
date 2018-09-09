var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = Promise;

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

app.post("/messages", async (request, response) => {
  var message = new Message(request.body);

  var savedMessage = await message.save()

  console.log('message saved');
  var censored =  await Message.findOne({ message: "badword" });

  if(censored) {
    await Message.remove({ _id: censored.id });
  } else {
    io.emit('message', request.body);
  }

  response.sendStatus(200);

    // .catch((error) => {
    //   response.sendStatus(500);
    //   console.error(error);
    // });
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