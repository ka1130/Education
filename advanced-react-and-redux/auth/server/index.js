const express = require ('express'); 
const http = require ('http');
// http is a native node library, working at a very low level with http requests that are coming
const bodyParser = require ('body-parser');
const morgan  = require ('morgan');
const app = express(); // an instance of express
const router = require('./router');
const mongoose = require('mongoose');

// DB setup - we pass an url here; it makes a new database inside of MongoDB called auth
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
/* 
  morgan and bodyParser are middlewars, all requests will be passed through them
  morgan is a logging framework - when I refresh the page for instance, I get some logging to the terminal's console
  used mostly for debugging, bodyParser parses incoming requests, specifically to json
  nodemon watches our file directory for any file changes - if it detects any change it will restart the server
*/
router(app);

/*
  Server setup
  First we define a port on which the server will run on our local machine
  if there's an environment variable of PORT defined, then use that, otherwise use 3090
*/
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on', port);