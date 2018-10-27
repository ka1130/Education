const passport = require('passport');
const User = require('../models/User');
const config = require('../config');
/*
  a stretegy is a method of authenticating the user
  Jwt attempts to authenticate the user using the JSON web token
  Jwt strategy is just one plugin to passport, there are many other like authenticate by GH of FB etc.
*/
const JwtStrategy = require('password-jwt').Strategy;
const ExtractJwt = require('password-jwt').ExtractJwt;

// Setup options for JWT Strategy
const jwtOptions = {

}

/* 
  Create JWT Strategy -  a new login object
  first arg to this constructor are the options, second is fn that will run whenever user tries to login with jwt
  or when we need to authenticate the user using the jwt token
  payload is the decoded jwt token: the { sub: user.id, iat: timestamp } from authentication.js
  it will have sub property and issued-at (iat) property
  'done' is a callback fn that we need to call depending on whether or not we successfully authenticated the user
*/
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in the database - if it does call 'done' with that user
  // otherwise call 'done' without a user object; payload.sub === user.id, that's how we assigned it
  User.findById(payload.sub, function(error, user) {
    /* 
      error will be populated onluy if the search fails, we don't have access to the database or sth
      the second object is user if we found one, in this case we did not
      in this case serach failed to occur, in the latter search fas successful but the user was found or not
    */
    if (error) { return done(error, false) };

    // if we found a user, call done without an error and with that user => null stands for error
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }

  });
});

// Tell passport to use this strategy