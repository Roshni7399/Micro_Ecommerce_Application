import ecom from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Signup
export const userSignup = async (req, res) => {
  const userAdd = new ecom({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phone: req.body.phone,
    // image:req.file.filename,
  });
  const data = await userAdd.save();
  if(data){
    return res.send({ 
      status: true, 
      message: "Registered successfully", 
      code: 200,
      // data:{
      // path:"http://localhost:8989/uploads/"+req.file.filename
      //      },
      result:data
   })}
};

// Login 
export const userLogin = async (req, res) => {
    const { email, password } = req.body;
  
    const result = await ecom.findOne({ email });
    if (!result) {
      res.send({
        status: false,
        message: "Invalid Credentials-Email is Incorrect !!!",
      });
    }
  
    const isValid = bcrypt.compareSync(password, result.password);
  
    if (isValid) {
      let payload = {};
      payload._id = result._id;
      console.log(result);
      jwt.sign(payload, "SECRET_KEY", { expiresIn: "24h" }, (err, token) => {
        res.send({ 
          status: true,
          message: "Successfully Login",
          Token: token,
          result:result
        });
      });
    } else {
      res.send({
        status: false,
        message: "Password is incorrect- Please enter correct password",
      });
    }
  };

// get data by ID
export const getUserDataById = async (req, res) => {
    try {
      let dataid = await ecom.findOne({
        id: mongoose.Types.ObjectId(req.query.id),
      });
      // console.log(dataid);
      res.send({
        status: true,
        message: "successfully getting data by id",
        result: dataid,
      });
    } catch (e) {
      throw e;
    }
  };