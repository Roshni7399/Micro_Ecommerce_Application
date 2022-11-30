import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import { forgetpassword } from "../../Services/Auth.User";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../Login/Login.css';

export default function ForgetPass() {

  const [input, setInput] = useState({
    email: "",
    
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const buttonHandler = async () => {
    const res = await forgetpassword(input.email);

    console.log(res.data.status);
    if (res.data.status === true) {
      toast.success("Reset Password Link is sent to your Email address")
    }
    console.log(res.data);
  };


    return (
      <div class="container">
<h1 class="form-heading"></h1>
<div>
  <Link to="/login">
    <button className="btn btn-light" align="right">
      🔙Back
    </button>
  </Link>
</div>
<div class="login-form">
  <div class="main-div">
    <div class="panel">
      <h3>Forget Password</h3>
      <center>Please enter your registered email </center>
    </div>
    <form action="" onSubmit={(e) => handleSubmit(e)} id="Login">
      <div class="form-group">
        <input
          type="email"
          name="email"
          class="form-control"
          id="inputEmail"
          placeholder="Email Address"
          onChange={handleChange}
        />
      </div>
      
      <button type="submit" class="btn btn-primary" onClick={buttonHandler}>
        Send
      </button>
    </form>
  </div>
</div>
</div>
    )
}


