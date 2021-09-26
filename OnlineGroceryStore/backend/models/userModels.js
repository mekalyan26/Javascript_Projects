import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    customer_name: { type: String, required: false },
    site_id: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zip_code: { type: String, required: false },
    phone: { type: String, required: false },
    isAdmin: { type: Boolean, required: true, default: false },
    password: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
