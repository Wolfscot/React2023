module.exports = (app, express, mongoose, bcrypt, jwt, SECRET, authMiddleware) => {
    const User = require('../models/user')(mongoose)   
    const Review = require('../models/review')(mongoose)
    const Job = require('../models/job')(mongoose, Review)

    const userManager = require('../management/userManager')(User, bcrypt)
    const jobManager = require('../management/jobManager')(Job)   
    const reviewManager = require('../management/reviewManager')(Review)

    const userController = require('../controllers/userController')(express.Router(), userManager, jwt, SECRET)
    const jobController = require('../controllers/jobController')(express.Router(), jobManager, authMiddleware)   
    const reviewController = require('../controllers/reviewController')(express.Router(), reviewManager, jobManager, authMiddleware)

    app.use("/users", userController)
    app.use("/jobs", jobController)   
    app.use("/reviews", reviewController)
    
}