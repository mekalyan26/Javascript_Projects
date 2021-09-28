import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import Customer from "../models/userModels.js";
import data from "../data.js";
import { generateToken } from "../utils.js";
import mongoose from 'mongoose';

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
      //await User.remove({});
    const createdUser = await Customer.insertMany(data.Customer);
    res.send({ createdUser });
  })
);

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await Customer.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.customer_name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({message:'Invalid email or password'});
})
);

export default userRouter;
