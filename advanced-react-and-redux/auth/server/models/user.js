const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  // instead of writing just String we pass an object to enforce uniqueness of this value
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// Create the model class
// this loads the schema into mongoose, it corresponds to the collection named 'user'
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
