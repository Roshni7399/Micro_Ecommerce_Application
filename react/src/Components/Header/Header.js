import "../../Components/style.css";
import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Menu from "@mui/material/Menu";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Eshopper from "../../images/mylogo.png";

export default function Header() {
  const nav = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log("getdata" ,getdata);

  const userdata = useSelector((state) => state.auth);
  console.log("slice", userdata);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [price, setPrice] = useState(0);
  // console.log(price);

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.quantity + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  const getidhandle = (data) => {
    console.log("click", data);
    nav(`/product-details/${data}`);
  };

  const dispatch = useDispatch();

  return (
    <>
      <Navbar className=" header bs" style={{ height: "100px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            <img src={Eshopper} style={{ width: "100px", heigth: "100px" }} />
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav>
             <NavLink to="/about-us" className="text-decoration-none text-light">About Us</NavLink>
          </Nav>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav>
            <NavLink to="/contact-us" className="text-decoration-none text-light">Contact Us</NavLink>
          </Nav>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav></Nav>
          <Nav>
            <NavLink to="/login" className="text-decoration-none text-light">
              Login
            </NavLink>
          </Nav>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic- menu"
          aria-labelledby="basic-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {getdata.length ? (
            <div
              className="product_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <p>Product details</p>
              <table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Product data</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    console.log("res", e);
                    let path = `http://localhost:8989/uploads/${e.image}`;
                    return (
                      <>
                        <tr>
                          <td>
                            <img
                              src={path}
                              style={{ width: "5rem", height: "5rem" }}
                              alt=""
                              onClick={() => getidhandle(e._id)}
                            />
                          </td>
                          <td>
                            <p>{e.name}</p>
                            <p>Price: ₹{e.price}</p>
                            <p>Quantity:{e.quantity}</p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total :₹ {price}</p>
                </tbody>
              </table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              <img
                src="./images/cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              ></img>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
}
