import React from "react";
import { useState, useEffect } from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { userSignup } from "../../Services/Auth.User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";

export default function Signup() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const AddUser = async () => {
    const apiResponse = await userSignup(
      input.name,
      input.email,
      input.password,
      input.phone
    );

    console.log(apiResponse.data);
    if (apiResponse.data.status == true) {
      navigate("/login");
      toast.success(
        "Congrats🎉 You've successfully Registered🤩 ",
        {
          position: toast.POSITION.TOP_CENTER,
        },
        { autoClose: 1000 }
      );
    } else {
      toast.warning(
        "Unable to registered, Please try again ",
        {
          position: toast.POSITION.TOP_CENTER,
        },
        { autoClose: 1000 }
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div class="container">
        <h1 class="form-heading"></h1>
        <div>
          <Link to="/">
            <button className="btn btn-light" align="right">
              🔙Back
            </button>
          </Link>
        </div>
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <h2>Signup</h2>
            </div>
            <form action="" id="Login" onSubmit={(e) => handleSubmit(e)}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="inputName"
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="inputEmail"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="inputPassword"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="phone"
                  class="form-control"
                  name="phone"
                  id="inputPhone"
                  placeholder="Phone"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" class="btn btn-primary" onClick={AddUser}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
