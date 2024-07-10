const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
const cors = require("cors");

//middleware connect to frontend
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello all");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const { default: Beauty } = require("../bloom/src/pages/BloomB");
const uri =
  "mongodb+srv://jananisuresh1016:Janani1010@cluster0.uadyecz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const ProductCollection = client.db("bloomDB").collection("Bproducts");

    app.post("/product", async (req, res) => {
      const data = req.body;
      const result = await ProductCollection.insertOne(data);
      res.send(result);
    });

    app.get("/allproduct", async (req, res) => {
      const Bproducts = ProductCollection.find();
      const result = await Bproducts.toArray();
      res.send(result);
    });
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await ProductCollection.findOne(filter);
      res.send(result);
    });
    app.patch("/product/:id", async (req, res) => {
      const id = req.params.id;
      const update = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: { ...update } };
      const option = { upsert: true };
      const result = await ProductCollection.updateOne(
        filter,
        updateDoc,
        option
      );
      res.send(result);
    });
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await ProductCollection.deleteOne(filter);
      res
        .status(200)
        .json({ success: true, message: "data deleted successfully", result });
    });
    //Paths for womens to fetch from DB
    const PrdCollWomen = client.db("bloomDB").collection("Bwomen");

    app.post("/productw", async (req, res) => {
      const data = req.body;
      const result = await PrdCollWomen.insertOne(data);
      res.send(result);
    });
    app.get("/allproductw", async (req, res) => {
      const Bwomen = PrdCollWomen.find();
      const result = await Bwomen.toArray();
      res.send(result);
    });
    app.get("/productw/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await PrdCollWomen.findOne(filter);
      res.send(result);
    });
    app.patch("/productw/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const update = req.body;
      const updateDoc = { $set: { ...update } };
      const option = { upsert: true };
      const result = await PrdCollWomen.updateOne(filter, updateDoc, option);
      res.send(result);
    });
    app.delete("/productw/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await PrdCollWomen.deleteOne(filter);
      res.status(200).json({
        success: true,
        message: "product deleted successfully",
        result,
      });
    });
    //Path for kids page to fetch data from DB
    const PrdCollKids = client.db("bloomDB").collection("Bkids");

    app.post("/productk", async (req, res) => {
      const data = req.body;
      const result = await PrdCollKids.insertOne(data);
      res.send(result);
    });
    app.get("/allproductk", async (req, res) => {
      const Bkids = PrdCollKids.find();
      const result = await Bkids.toArray();
      res.send(result);
    });
    app.get("/productk/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await PrdCollKids.findOne(filter);
      res.send(result);
    });
    app.patch("/productk/:id", async (req, res) => {
      const id = req.params.id;
      const update = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: { ...update } };
      const option = { upsert: true };
      const result = await PrdCollKids.updateOne(filter, updateDoc, option);
      res.send(result);
    });
    app.delete("/productk/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await PrdCollKids.deleteOne(filter);
      res.status(200).json({
        success: true,
        message: "product deleted successfully",
        result,
      });
    });
    //Path to fetch data from DB for beauty
    const prdCollBeauty = client.db("bloomDB").collection("Bbeauty");

    app.post("/productb", async (req, res) => {
      const data = req.body;
      const result = await prdCollBeauty.insertOne(data);
      res.send(result);
    });
    app.get("/allproductb", async (req, res) => {
      const Bbeauty = prdCollBeauty.find();
      const result = await Bbeauty.toArray();
      res.send(result);
    });
    app.get("/productb/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await prdCollBeauty.findOne(filter);
      res.send(result);
    });
    app.patch("/productb/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const update = req.body;
      const updateOne = { $set: { ...update } };
      const option = { upsert: true };
      const result = await prdCollBeauty.updateOne(filter, updateOne, option);
      res.send(result);
    });
    app.delete("/productb/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await prdCollBeauty.deleteOne(filter);
      res.status(200).json({
        success: true,
        message: "product deleted successfully",
        result,
      });
    });
    //Authentication
    const bodyParser = require("body-parser");

    app.use(bodyParser.json());
    const users = [];
    app.post("/api/register", (req, res) => {
      const { email, password } = req.body;
      if (users.find((users) => users.email === email)) {
        return res.status(400).json({ message: "user already exists" });
      }
      users.push({ email, password });
      res.status(201).json({ message: "user registered successfully" });
    });
    app.post("/api/login", (req, res) => {
      const { email, password } = req.body;
      const user = users.find((users) => {
        users.email === email && users.password === password;
      });
      if (!user) {
        res.status(400).json({ message: "Invallid email or password" });
      }
      res.json({ token: "dummy-token" });
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //     await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`connected to mongodb ${port}`);
});
