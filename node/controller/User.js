import ecom from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { sendMail } from "../middleware/sendMail";

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
      jwt.sign(payload, "something", { expiresIn: "24h" }, (err, token) => {
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


// forget-password
export const foregetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await ecom.findOne({ email });
    if (!user) {
      res.send({
        status: 400,
        message: "Email Not Exits",
      });
    }
    let payload = {};
    (payload._id = user._id), (payload.email = user.email);
    const token = jwt.sign(payload, "something", { expiresIn: "24h" });
    console.log("token",token);
    if (token) {
      res.send({
        status: true,
        message: "please check your email to change your password.",
      });
    }
   sendMail(
      'roshnimanmode07@gmail.com',
      email,
      "Forget-Password",
      `<p>Click <a href="http://localhost:3000/reset-password/${token}">here</a> to reset your password</p>`
    );
  } catch (e) {
    console.log(e);
  }
};


// reset-Password
export const reSetPassword = async (req, res) => {
  const { password, confirmPassword, token } = req.body;
  const decode = jwt.verify(token, "something");
  let _id = decode._id;
 try {
    if (password == confirmPassword) {
      const newPassword = await bcrypt.hashSync(password, 8);
      await ecom.updateOne({ _id }, { $set: { password: newPassword } });
      res.send({
        status: true,
        message: "Password Reset Successfully",
      });
    } else {
      res.send({
        status: true,
        message: "Both passwords are not matched",

      });
    }
  } catch (e) {
    console.log(e);
    // res.send({ status: false, message: "Invalid Token" });
  }
};