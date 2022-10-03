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

export const Imagelist = async () => {
  try {
    const response = await axios.get(API_URL + "img/list", axiosConfig);
    return response;
  } catch (e) {
    console.log(e);
    return null;
  }
};
