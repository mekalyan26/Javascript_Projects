import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    customer_name: { type: String, required: true },
    site_id:{type: String,required:false}, 
    email: { type: String, required: true, unique: true },   
    address:{type: String,required:false},
    city:{type: String,required:false},
    state:{type: String,required:false},
    zip_code:{type: String,required:false},
    phone:{type: String,required:true},    
    isAdmin: { type: Boolean, required: true, default: false },
    password: { type: String, required: true },    
  },
  {
    timestamp: true,
  }
);

const Customer = mongoose.model("User", userSchema);
export default Customer;
