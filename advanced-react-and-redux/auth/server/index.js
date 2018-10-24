// Main starting point for the application - whenerver we start oir app this will be the first place to execute
// we run it with `node index.js` while in the auth/server directory
import express from 'express'; 
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express(); // an instance of express

// App setup


// Server setup
// First we define a port on which the server will run on our local machine
// if there's an environment variable of PORT defined, then use that, otherwise use 3090
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);