module.exports = function(app) {
  // get because we're expecting a get request; when user visits this route, '/', then run this fn
  app.get('/', function(request, response, next) {
    response.send(['waterbottle', 'phone', 'paper']);
  });
}
