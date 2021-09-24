import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageUrl:{type: String,required:false},
    brand:{type: String,required:false},
    category:{type: String,required:false},
    description:{type: String,required:false},
    price:{type: Number,required:true},
    countInStock:{type: Number,required:true},
    rating:{type: Number,required:true},
    reviews:{type: Number,required:true},    
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", userSchema);
export default Product;