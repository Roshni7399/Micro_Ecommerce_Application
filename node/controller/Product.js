import Product from '../model/Product';
import mongoose from "mongoose";
const stripe = require('stripe')('sk_test_51Ljf51SEdrIjlgU6WObSsur8uwqMqHvfjUCr1X9REnQG8GqJ5cTjXiGJcm9f1EsDXtQVzKjfRlSCpddIcCONpogK00mO1j3yCq')


// Add Product 
export const addProduct = async (req, res) => {
    const add = new Product({
      productName: req.body.productName,
      desc: req.body.desc,
      quantity: req.body.quantity,
      price: req.body.price,
      total:req.body.total,
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
export const productList = async (req, res) => {
    console.log(req.body);
    const productdata = await Product.paginate(
      {},
      {
        sort:{price: req.body.price} ,   
        page: req.body.page,
        limit: req.body.limit,
      },
      (err, result) => {
  
        res.send({
          status: true,
          message: "successfully getting list",
          result: result,
        });
        console.log(result);
      }
  
    );
  }


// Get Product by ID  
  export const getProductsById = async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    const result = await Product.findById({_id:id })
  
    if(result){
        res.send({ 
            status:true,
            message:"Find Successfully",
            result:result
        })
    }
  }
 
  
// Search
  export const Search = async (req, res) => {
    console.log(req.body);
    const data = await Product.find(
      {productName: { $regex: req.body.productName, $options: "i" }},
    );
    console.log(data);
    res.send({
      status: true,
      message: "successfully getting list",
      result: data,
    });
  }

  // export const Search = async (req, res) => {
  //   const data = await Product.find({
  //       productName: { $regex: req.params.Key, $options: "i" } 
  //   });
  //   res.send({
  //     status: true,
  //     message: " Result found ",
  //     result: data,
  //   });
  // };




  // payment
export const payment = async (req, res) => {
  const {price,user_id} = req.body;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: "SmartData Inc",
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/success/${user_id}`,
    cancel_url: 'http://localhost:3000/fail',
  });
  console.log("session", session)
  // res.send({url: session.url});
  res.send({ status: 200, message: "SUCCESS", result: session })
}
