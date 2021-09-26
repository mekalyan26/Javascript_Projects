import express from 'express';
import mongoose from 'mongoose';
import data from './data';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

//This is for loading environment specific details from a file
require("dotenv").config();

const app = express();

//const connection_string = process.env.CONNECTION_STRING

mongoose
  .connect(process.env.CONNECTION_STRING, {    
  })
  .then(() => console.log("MongoDB Connection Established"))
  .catch((error) => console.error("DB Connection Failed : ", error.message));

/*app.get("/api/products", (req, res) => {
  res.send(data.products);
});*/

app.use("api/users", userRouter);

//http://localhost:5000/api/products/seed
app.use("api/products", productRouter);

/*app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product not found" });
});*/

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(5000, () => {
  console.log("my server started at http://localhost:5000");
});
