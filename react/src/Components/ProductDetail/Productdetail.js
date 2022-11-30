import { Table } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsById } from "../../Services/Auth.Product";
import { ADD, DEL, REMOVE } from "../../redux/actions/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Productdetails() {
  const navigate = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("getdata", getdata);

  const { id } = useParams();
  const [data, setData] = useState({});

  let path = `http://localhost:8989/uploads/${data.image}`;
  console.log("data", path);

  useEffect(() => {
    const up = async () => {
      const response = await getProductsById(id);
      // console.log(response.data.result);
      setData(response.data.result);
    };
    up();
  }, [id]);

  const dispatch = useDispatch();
  const nav = useNavigate();

  // add data
  const send = (e) => {
    dispatch(ADD(e));
    console.log(e);
  };

  const del = (id) => {
    dispatch(DEL(id));
    nav("/");
    toast.error(
      "Product Deleted Successfully ",
      {
        position: toast.POSITION.TOP_CENTER,
      },
      { autoClose: 1000 }
    );
  };

  // remove one product
  const remove = (item) => {
    dispatch(REMOVE(item));
    nav("/");
    toast.error(
      "Product Deleted Successfully ",
      {
        position: toast.POSITION.TOP_CENTER,
      },
      { autoClose: 1000 }
    );
  };

  // Calculating Total Price
  const [price, setPrice] = useState(0);
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

  console.log("data", data);

  return (
    <>
      {/* <Header/> */}
      <div className="container mt-2">
        <h2 className="text-center">Product Details</h2>

        <div>
          <Link to="/">
            <button className="btn btn-light" align="right">
              🔙Back
            </button>
          </Link>
        </div>
        <section className="container bs1 col-md-8 mt-3">
          <div className="product_details ">
            <div className="row">
              <div className="products_img d-flex col-md-3">
                <img
                  src={path}
                  style={{ width: "150px", heigth: "50px" }}
                  alt=""
                />
              </div>

              <div className="details col-md-3">
                <Table>
                  <tr>
                    <td>
                      <p>
                        <strong>Product:</strong>
                        {data.name}
                      </p>
                      <p>
                        <strong>Price:</strong>₹ {data.price}
                      </p>
                      <p>
                        <strong>Description:</strong>
                        {data.desc}
                      </p>
                      <p>
                        <strong>Total:</strong>₹ {price}
                      </p>
                      <div
                        className="mt-5 d-flex justify-content-between align-items-center"
                        style={{
                          width: 100,
                          cursor: "pointer",
                          background: "#ddd",
                          color: "#111",
                        }}
                      >
                        {/* <span style={{ fontSize: 24 }}>-</span> */}
                        <span
                          style={{ fontSize: 24 }}
                          onClick={
                            data.quantity <= 1
                              ? () => remove(data)
                              : () => del(data)
                          }
                        >
                          -
                        </span>
                        {getdata.map((data) => {
                          let x = data._id;
                          return (
                            <span style={{ fontSize: 22 }}>
                              {data.quantity}
                            </span>
                          );
                        })}
                        {/* <span style={{ fontSize: 24 }}>+</span> */}
                        <span
                          style={{ fontSize: 24 }}
                          onClick={() => send(data)}
                        >
                          +
                        </span>
                      </div>
                    </td>{" "}
                    &nbsp;
                    <td>
                      <p>
                        <strong>Rating:</strong>
                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          3.5★
                        </span>
                      </p>
                      <p>
                        <strong>Remove:</strong>
                        <span>
                          {" "}
                          <i
                            className="fas fa-trash"
                            onClick={() => del(data.id)}
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          ></i>
                        </span>
                      </p>
                    </td>
                  </tr>
                </Table>
              </div>
              <center>
                <br /> <br />
                <div>
                  <Link to={`/add-order/${data._id}`}>
                    <button type="submit" class="btn btn-primary" align="right">
                      CheckOut
                    </button>
                  </Link>
                </div>
              </center>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
