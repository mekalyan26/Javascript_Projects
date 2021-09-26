import express from 'express';
import mongoose from 'mongoose';
import data from './data';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.CONNECTION_STRING, {    
  })
  .then(() => console.log("Ecommerse MongoDB Connection Established"))
  .catch((error) => console.error("DB Connection Failed : ", error.message));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send("Backend Server is ready");
});

/*app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product not found" });
});*/


app.use((err, req, res, next) => {
  res.status(404).send({ message: err.message });
});

app.listen(5000, () => {
  console.log("online grocery store backend server started at http://localhost:5000");
});
