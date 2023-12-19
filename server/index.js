const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('./utils/jwt')

const app = express()
const PORT = 5000
const SECRET = 'SECRET'

//Config
const config = require('./config/config')
config(app, express, mongoose)

//MIddlewears
const authMiddlewareImport = require('./middleware/authMiddleware')
const authMiddleware = authMiddlewareImport(jwt, SECRET)

//Routes
router = require('./router/mainRouter')
require('./router/mainRouter')(app, express, mongoose, bcrypt, jwt, SECRET, authMiddleware);
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
  });
  
  // Empty page route
  app.get('/empty', (req, res) => {
    res.send('This is an empty page.');
  });

app.listen(PORT, () => console.log(`app running on port ${PORT}`))