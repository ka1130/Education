const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

/*
  middleware object; when user is authenticated, don't try to create a session for them
  by default passport tries to create a cookie-based session
  since we're using tokens we don't want that
*/
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  /*
    get because we're expecting a get request; when user visits this route, '/', then run this fn
      app.get('/', function(request, response, next) {
        response.send(['waterbottle', 'phone', 'paper']);
      });
  */
  // if anyone wants to get there, first send them to requireAuth
  // if they get through that, then run callback fn to handle the request
  app.get('/', requireAuth, function(request, response) {
    response.send({ hi: 'there' });
  });

  app.post('/signin', requireSignin, Authentication.signin)

  app.post('/signup', Authentication.signup);
}
