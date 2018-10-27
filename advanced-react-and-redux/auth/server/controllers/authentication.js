const User = require('../models/user');
// this is a class, represents all users, we use it to serach our database for existing emails

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

    // If a user with a given email does NOT exist, create and save a user record
    // create a new instance of our User model and we pass an object with the attributes we want this user to have
    // it just creates the new user, not saves it
    const user = new User({
      email: email,
      password: password
    });

    // we pass a callback to the save() method that will run once the save is done
    user.save(function(error) {
      if (error) { return next(error) };

      // Respond to request indicating the user was created
      response.json({ success: true });
    });
  }); 
}
