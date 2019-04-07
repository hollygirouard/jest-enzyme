// Main starting point of the app
// No access to es6 syntax
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const router = require('./router')

// DB Setup

mongoose.connect('mongodb://localhost/auth')

// App Setup

// boilerplate
// morgan is a logging framework
app.use(morgan('combined'))
// parse incoming requests as json
app.use(bodyParser.json({ type: '*/*'}))
router(app)


// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)
