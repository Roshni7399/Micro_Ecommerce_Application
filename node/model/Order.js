import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   
    userId: {
        type: String,
        required: false
    },
    productId: {
      type: String,
      required: false
    },
    name:{
        type:String
    },
    price:{
        type:String
    },
    address:{
      type:String
    },
    payment:{
        type:String,
        default:"Unpaid"
    }
    
})
const data = mongoose.model("order", orderSchema)
export default data;