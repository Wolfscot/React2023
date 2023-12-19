<<<<<<< HEAD
const uri = `mongodb://127.0.0.1:27017/carstagram`
=======
const mongoAtlasUri =`mongodb+srv://gkrasteva88:jobseeker69@cluster0.9wuh7xk.mongodb.net/?retryWrites=true&w=majority`;
>>>>>>> parent of 10cda60 (server finished)


module.exports = async (app, express, mongoose) => {
        //app.use((req, res, next) => {
        //    res.header("Access-Control-Allow-Origin", "*");
        //    res.header("Access-Control-Allow-Methods", "*");
        //    //res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        //    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        //    next();
        //})
        //app.use(express.urlencoded({ extended: false }))
        //app.use(express.json())

    const connectToMongo = async () => {
        await mongoose.connect(mongoAtlasUri);
        console.log("Connected to MongoDB");
    };

    connectToMongo();

    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => console.log("Connected to DB!"));
}