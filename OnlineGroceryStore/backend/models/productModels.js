import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    site_id: { type:String, required:false },
    product_id: { type:String, required:false },
    product_category_id: { type:String, required:false },
    product_name: { type: String, required: true },
    product_price:{type: Number,required:true},
    product_image_path:{type: String,required:false},
    product_brand:{type: String,required:false},
    product_status:{type: String,required:false},
    product_rating:{type: Number,required:false},
    product_countInStock:{type: Number,required:false},
    product_description:{type: String,required:false},
    product_review:{type: Number,required:false},    
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;