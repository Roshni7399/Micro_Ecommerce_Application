import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  addproduct,
  paymentt,
  getProductDetail,
} from "../../Services/Auth.Order";
import { getUserDetail } from "../../Services/Auth.User";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Product() {
  const [show, setShow] = useState([]);
  let { id } = useParams();
  console.log(id);
  // const userdata = useSelector((state) => (state.auth.data.result))
  const getdata = useSelector((state) => state.cartreducer).carts[0].price;
  console.log("getdata.....", getdata);

  const datadata = useSelector((state) => state.cartreducer).carts[0].quantity;
  console.log("quantity.....", getdata);

  const data = useSelector((state) => state.cartreducer).carts[0].total;
  console.log("total.....", getdata);

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const test = async (id) => {
      const response = await getUserDetail(id);
      console.log("response", response);
      // setDetail(response.data.result)
      setDetail({
        userId: response.data.result._id,
        productId: getdata,
        name: response.data.result.name,
        price: getdata,
        quantity: datadata,
        total: data,
      });
    };
    test(id);
  }, []);

  const buttonHandler = async (e, detail) => {
    e.preventDefault();
    console.log("payment", detail);

    const resp = await addproduct(
      detail.userId,
      detail.productId,
      detail.price
    );
    console.log("resp", resp);
    let id = resp.data.result._id;

    const res = await paymentt(detail.price, id);

    if (res.data.result) {
      window.location.href = res.data.result.url;
    }
  };

  return (
    <div className="container mt-4">
      <div>
        <Link to="/">
          <button className="btn btn-light" align="right">
            🔙Back
          </button>
        </Link>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="row justify-content-center">
        <div className="col-md-6" style={{ width: "100%" }}>
          <form className="form-control">
            <div className="form-group">
              <center>
                <h3>Order Details</h3>
              </center>
              <div className="row">
                <div className="col-md-4">
                  <label>Name</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={detail.name}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <label>Price $</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={detail.price}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <label>Quantity </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={detail.quantity}
                  />
                </div>
              </div>
              <br />
              <div className="row">
              </div>
              <div className="row">
                <div>
                  <Button
                    variant="info"
                    onClick={(e) => buttonHandler(e, detail)}
                    className="bi bi-trash"
                  >
                    Proceed to Pay{" "}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
