import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true, unique: true },
    product_image_path:{type: String,required:false},
    product_brand:{type: String,required:false},
    product_category:{type: String,required:false},
    product_description:{type: String,required:false},
    product_price:{type: Number,required:true},
    product_countInStock:{type: Number,required:true},
    product_rating:{type: Number,required:true},
    product_reviews:{type: Number,required:true},    
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;