const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9wuh7xk.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const db = client.db("jobServerData");
        const jobsCollection = db.collection("jobs");

        // Get all
        app.get("/all-jobs", async (req, res) => {
            const jobs = await jobsCollection
                .find({})
                .sort({ createdAt: -1 })
                .toArray();
            res.send(jobs);
        });
        //post one 
        app.post("/post-job", async (req, res) => {
            const body = req.body;
            body.createdAt = new Date();
           
            const result = await jobsCollection.insertOne(body);
            if (result?.insertedId) {
              return res.status(200).send(result);
            } else {
              return res.status(404).send({
                message: "can not insert try again leter",
                status: false,
              });
            }
          });

        // Creating index for job sorting last job posted will show first
        const indexKeys = { title: 1, category: 1 };
        const indexOptions = { name: "titleCategory" };
        const result = await jobsCollection.createIndex(indexKeys, indexOptions);
        // console.log(result);







        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);