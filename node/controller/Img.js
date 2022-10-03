import Image from '../model/Img';
import mongoose from "mongoose";

// Add image 
export const addImg = async (req, res) => {
    const add = new Image({
      image:req.file.filename,
    });
  
    const data = await add.save();
    if(data){
      return res.send({ 
        status: true, 
        message: "Product added successfully", 
        code: 200,
        data:{
        path:"http://localhost:8989/uploads/"+req.file.filename
             },
        result:data
     })}
  };

// List
  export const list = async (req, res) => {
    const data = await Image.find({});
    res.send({
      status: true,
      message: "image List Result found ",
      result: data,
    });
  };