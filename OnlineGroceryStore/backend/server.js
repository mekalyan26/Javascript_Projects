import express from "express";
import data from "./data";
import mongoose from "mongoose";
import userRouter from ".rounter/userRouter.js";

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/onlinegroceriesstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use('api/users', userRouter);

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product not found" });
});

app.use((err,req,res,next) =>{
res.status(500).send({message: err.message});
});

app.listen(5000, () => {
  console.log("my server started at http://localhost:5000");
});
