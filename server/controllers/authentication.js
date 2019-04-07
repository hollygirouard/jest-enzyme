const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config')

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  return jwt.encode( { sub: user.id, iat: timestamp }, config.secret)
}

exports.signin = function(req, res, next) {
  // user has already supplied email and password
  // we just need to give them a token
  res.send({ token: tokenForUser(req.user) })
}

exports.signup = function(req, res, next) {
  const email = req.body.email
  const password = req.body.password
  //anything that is contained in the post request

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide and email and password'})
  }

  /// See if a user with a given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err) }
      // if a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }
    // Respond to request indicating the user was creating
    const user = new User({
      email: email,
      password: password
    })

    user.save(function(err){
      if (err) { return next(err) }
      // respond to request indicating the user was created
      res.json({ token: tokenForUser(user) } )
    })
  })
}
