import mongoose from "mongoose";
import order from '../model/Order';

export const addproduct=async(req,res)=>{
    try {
        const add = new order({
            userId:req.body.userId,
            productId: req.body.productId,
            name:req.body.name,
            price:req.body.price,
            address:req.body.address,
        })
       const data= await add.save();
       console.log(data._id)
       if(data){
        return res.send({ status: true, message: "product added", code: 200,
        result:data
       })}  
    }
    catch (e) {
        throw e
    }
}


export const Updateproduct = async (req,res) => {
    try {
        console.log("Hurreh",req.body.id)
       
        order.updateOne({ _id: req.body.id },
            { $set: {payment : "Paid"} },
            { new: true },
            (err, updatedlist) => {
                if (err) {
                    res.send({ status: 404, message: "Failed to update", result: err })
                } else {
                    res.send({ status: 200, message: "Updated Successfully", result: updatedlist })
                }
            })
    }
    catch (e) {
        throw e
    }
  }


  export const productDetailById = async(req,res)=>{
    const {id}=req.params;
    const result = await order.findById(id)
    console.log(result);
    if(result){
        res.send({
            status:true,
            message:"Find",
            result:result
        })
    }
}  