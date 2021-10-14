import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModels.js";
import data from "../data.js";
import mongoose from "mongoose";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await products.find({});
    if (products) {
      res.send(products);
    } else {
      res.status(404).send({ message: "Products Not Found" });
    }
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await Product.remove({});
    const createdProducts = await Product.insertMany(data.Product);
    if (createdProducts) {
      res.send({ createdProducts });
    } else {
      res.status(404).send({ message: "Product could not be entered" });
    }
    res.send({ createdProducts });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const products = await products.findById(reg.params.id);
    if (products) {
      res.send(products);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
    res.send(products);
  })
);

export default productRouter;
