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

export const Productslist = async (limit, page, sort) => {
  try {
    const response = await axios.post(
      API_URL + "product/productlist",
      {
        limit,
        page,
        price: sort,
      },
      axiosConfig
    );
    return response;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getProductsById = async (id) => {
  return axios.get(API_URL + `product/getproductsbyid/${id}`, axiosConfig);
};

// export const searchData = async (Key) => {
//   return await axios.get(
//     API_URL + `product/search/${Key}`,
//     { Key },
//     axiosConfig
//   );
// };

export const searchData = async (content) => {
  return await axios.post(
    API_URL + `product/search`,
    { productName: content },
    axiosConfig
  );
};
