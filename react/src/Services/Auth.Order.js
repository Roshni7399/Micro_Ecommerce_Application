import axios from "axios";
import { getInfo } from "../Services/Auth.header";

const TOKEN = getInfo();

const API_URL = "http://localhost:8989/";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: TOKEN,
  },
};

export const updateProduct = async (id) => {
  return await axios.put(
    API_URL + "order/Updateproduct",
    {
      id,
    },
    axiosConfig
  );
};

// PAYMENT
export const paymentt = async (price, user_id) => {
  return await axios.post(
    API_URL + `product/payment`,
    { price, user_id },
    axiosConfig
  );
};

// ORDER
export const addproduct = async (userId, productName, price) => {
  return await axios.post(
    API_URL + "order/addproduct",
    { userId, productName, price },
    axiosConfig
  );
};

export const getProductDetail = async (id) => {
  // console.log("hurreh",id)
  return axios.get(API_URL + `order/productDetailById/${id}`, axiosConfig);
};
