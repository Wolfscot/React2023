const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('./utils/jwt')


const PORT = process.env.PORT || 5000;
const SECRET = 'SECRET';


app.use(express.json());
app.use(cors())




//Config
const config = require('./config/config')
config(app, express, mongoose)

//MIddlewares
const authMiddlewareImport = require('./middleware/authMiddleware')
const authMiddleware = authMiddlewareImport(jwt, SECRET)

//Routes
router = require('./router/mainRouter')
require('./router/mainRouter')(app, express, mongoose, bcrypt, jwt, SECRET, authMiddleware)

app.listen(PORT, () => console.log(`app running on port ${PORT}`))


const express = require("express");
const { PORT } = require("./config/env");
const { initDb } = require("./config/initDb");
const routes = require("./config/routes");
const expressConfig = require("./config/express");

const app = express();
expressConfig(app);
app.use(routes);
initDb().then(
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`))
);