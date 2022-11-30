import React from 'react'
import { useState } from 'react';
import {  useNavigate,useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { setPassword } from '../../Services/Auth.User'

export default function ResetPassword() {
  const Navigate = useNavigate();
  const {token} =useParams()
  console.log(token)

const [input, setInput]= useState({
  password:"",
  confirmPassword:""
})


const submitHandler = async()=>{
  const response = await setPassword(input.password,input.confirmPassword,token);
  console.log(response);
  if(response.data.status === true){
    toast.success("Password Reset Successfully")
    Navigate("/login")
  }
  else{
    toast.error("Password Reset UnSuccessfully")
  }
console.log(response)
}



const handleChange =(e)=>{
  const {name,value} = e.target;
  setInput((previousValue)=>({
    ...previousValue,
    [name]:value
  }))
}
console.log(input)
  return (
    <div>
         <div class="container login-container">
        <div class="row">
          <div class="col-md-6 ads">
            <h1>
              <span id="sl">Reset Password.</span>
            </h1>
          </div>
          <div class="col-md-6 login-form">
            <br />
            <br />
            <form>
              <div class="form-group">
                <label>New Password</label>
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  placeholder="Enter Password."
                  onChange={handleChange}
                />
              </div>
              <br />
              <div class="form-group">
                <label>Confirm Password</label>
                <input
                  type="text"
                  class="form-control"
                  name="confirmPassword"
                  placeholder="Enter Password"
                  onChange={handleChange}

                />
              </div>
              <br />
              <div class="form-group">
                <button type="button" class="btn btn-primary btn-lg btn-block"onClick ={submitHandler}>
                  Done
                </button>
                <br />
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
