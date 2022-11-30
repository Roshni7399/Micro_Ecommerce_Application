// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Viewall from "./Components/ViewAll/Viewall";
import Productdetail from "./Components/ProductDetail/Productdetail";
import Success from "./Components/success";
import Order from "./Components/Order/Order";
import AboutUs from "./Components/AboutUs/Aboutus";
import ContactUs from "./Components/ContactUs/Contactus";
import ForgetPass from "./Components/ForgetPass/ForgetPass";
import ResetPass from "./Components/ResetPass/ResetPass";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/product-details/:id" element={<Productdetail />} />
        <Route path="/view-all" element={<Viewall />} />
        <Route path="/add-order/:id" element={<Order />} />
        <Route path="/success/:id" element={<Success />} />
        <Route path='/about-us'  element={<AboutUs/>} ></Route>
        <Route path='/contact-us'  element={<ContactUs/>} ></Route>
        <Route path='/forget-password' element={<ForgetPass/>}></Route>
        <Route path='/reset-password/:token' element={<ResetPass/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
