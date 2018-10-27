const jwt = require('jwt-simple');
const User = require('../models/user');
// this is a class, represents all users, we use it to serach our database for existing emails
const config = require('../config');

// the below fn takes user model as a single argument
function tokenForUser(user) {
  // timestamp of when this token was issued
  const timestamp = new Date().getTime();
  // sub (short for subject, who does this token belog to, our subject is this specific user) is a jwt convention
  // iat is another convention meaning 'issued at time'
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(request, response, next) {
  // user has already their credentials authed, we just need to give the a token
  response.send({ token: tokenForUser(request.user) });
}

exports.signup = function(request, response, next) {
  // See if a user with a given email exists
  const email = request.body.email;
  const password = request.body.password;

  if (!email || !password) {
    return response.status(422).send({ error: 'You must provide email and password' });
  }

  // we pass our search criteria to this method, the second arg is callback that will run once search is complete
  // if there's no such user, the value of existingUser will be null
  User.findOne({ email: email }, function(error, existingUser) {
    if (error) { return next(error) };

    // If a user with a given email does exist, return an error
    if (existingUser) {
      // an HTTP status on the response; 422 means 'unprocessable entity'
      return response.status(422).send({ error: 'Email is in use' });
    }

    /* 
      If a user with a given email does NOT exist, create and save a user record
      create a new instance of our User model and we pass an object with the attributes we want this user to have
      it just creates the new user, not saves it
    */
    const user = new User({
      email: email,
      password: password
    });

    // we pass a callback to the save() method that will run once the save is done
    user.save(function(error) {
      if (error) { return next(error) };

      // Respond to request indicating the user was created
      response.json({ token: tokenForUser(user) });
    });
  }); 
}


/* 
  sign in = exchange their email and password for token in the future, they should get the token on sign up and sign in
  we also want to make sure that the user is authenticated before letting them into any protected resources
  - only on some routes - we will use a library called password.js
*/