import React, { useEffect } from "react";
import { useParams } from "react-router";
import { updateProduct, getProductDetail } from "../Services/Auth.Order";

function Success() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const test = async (id) => {
      const response = await updateProduct(id);
    };
    test(id);
  }, []);

  return (
    <center>
      <div className="align-self-center justify-content-center">
        <br />
        <img
          src="https://thumbs.dreamstime.com/b/payment-successful-template-vector-art-success-ful-206586442.jpg"
          style={{ width: "30%", height: "30%" }}
          alt=""
        />
        <h1>Payment Success</h1>
      </div>
    </center>
  );
}

export default Success;
