const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('./utils/jwt')

const app = express()
const PORT = 5000
<<<<<<< HEAD
const SECRET = 'JOBSEEKER'
=======
const SECRET = 'SECRET';

const cors = require('cors');


const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
};

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

>>>>>>> parent of 10cda60 (server finished)

//Config
const config = require('./config/config')
config(app, express, mongoose)

<<<<<<< HEAD
//MIddlewears
//onst authMiddlewearImport = require('./middlewears/authMiddlewear')
//onst authMiddlewear = authMiddlewearImport(jwt, SECRET)

//Routes
router = require('./router/mainRouter')
require('./router/mainRouter')(app, express, mongoose, bcrypt, jwt, SECRET, authMiddlewear)
=======
//MIddlewares
const authMiddlewareImport = require('./middleware/authMiddleware')
const authMiddleware = authMiddlewareImport(jwt, SECRET)

//Routes
router = require('./router/mainRouter')
require('./router/mainRouter')(app, express, mongoose, bcrypt, jwt, SECRET, authMiddleware)
>>>>>>> parent of 10cda60 (server finished)

app.listen(PORT, () => console.log(`app running on port ${PORT}`))