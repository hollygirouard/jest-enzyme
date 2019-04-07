const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
// Define model
const userSchema = new Schema({
  // does not inforce case so you need to add lowercase
  // unique prevents duplicates
  email: { type: String, unique: true, lowercase: true },
  password: String
})

// On save hook, encrypt password
// before saving a model, run this function
userSchema.pre('save', function(next) {
  // get access to user model
  const user = this // could use user.email, user.password

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err) }

    // hash (encrypt) password using salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err) }
      /// overwrite plain text password with encrypted password
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err) }

    callback(null, isMatch)
  })
}

// Create Model class

const ModelClass = mongoose.model('user', userSchema)

// Export the Model

module.exports = ModelClass
