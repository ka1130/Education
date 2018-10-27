const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  // instead of writing just String we pass an object to enforce uniqueness of this value
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// On Save Hook, encrypt password
// Before saving a model, run this function - this is what pre is doing, it runs sth before the 'save' arg
userSchema.pre('save', function(next) {
  // 'this' is a context, we're getting access to the User model
  // user is an instance of a User model
  const user = this;

  // generate a salt, then run callback
  bcrypt.genSalt(10, function(error, salt) {
    if (error) return { error: next(error) };

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(error, hash) {
      if (error) return { error: next(error) };

      // overwrite plain text password with encrypted password
      user.password = hash;
      // go ahead and save the model
      next();
    });
  });
});

// Create the model class
// this loads the schema into mongoose, it corresponds to the collection named 'user'
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
