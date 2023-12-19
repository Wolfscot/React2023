const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('./utils/jwt');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET = 'JOBSEEKER';

//// Config
//const config = require('./config/config');
//config(app, express, mongoose);

// Middleware
const authMiddlewareImport = require('./middleware/authMiddleware');
const authMiddleware = authMiddlewareImport(jwt, SECRET);

// Routes
const mainRouter = require('./router/mainRouter');
mainRouter(app, express, mongoose, bcrypt, jwt, SECRET, authMiddleware);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));

app.use(express.json());
app.use("/", mainRouter);

const mongoAtlasUri =`mongodb+srv://gkrasteva88:jobseeker69@cluster0.9wuh7xk.mongodb.net/?retryWrites=true&w=majority`;


const connectToMongo = async () => {
    await mongoose.connect(mongoAtlasUri);
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));