import React from "react";
import { useState, useEffect } from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { userLogin } from "../../Services/Auth.User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";

export default function Login() {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(input);
      console.log(response.data, "response");

      if (response.data.status == true) {
        navigate("/");
        toast.success(
          "Congrats🎉 You've successfully SignIn🤩 ",
          {
            position: toast.POSITION.TOP_CENTER,
          },
          { autoClose: 1000 }
        );
      } else {
        toast.warning(
          "Unable to Login, Please try again ",
          {
            position: toast.POSITION.TOP_CENTER,
          },
          { autoClose: 1000 }
        );
      }
    } catch (e) {
      console.warn(e);
    }
  };
  console.log(input);

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
              <h2>Login</h2>
              <p>Please enter your email and password</p>
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
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <div class="signup">
                New User? &nbsp;
               <i>
               <strong>
                  <Link to="/sign-up">SignUP</Link>
                </strong>
               </i>
              </div>
              <br/>
              <div id="formFooter">
                <a class="underlineHover" href="#">
                  <i><Link to="/forget-password">Forget Password</Link></i>
                </a>
              </div>
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
