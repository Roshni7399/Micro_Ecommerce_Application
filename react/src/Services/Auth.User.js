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

// Login
export const userLogin = async ({ email, password }) => {
  try {
    const response = await axios.post(
      API_URL + "ecom/userlogin",
      {
        email,
        password,
      },
      axiosConfig
    );
    if (response.data.status == true) {
      localStorage.setItem("users", JSON.stringify(response.data));

      return response;
    } else {
      return response;
    }
  } catch (e) {
    return null;
  }
  // console.log(email)
  // console.log(password)
};

// Signup
export const userSignup = async (name, email, password, phone) => {
  return await axios.post(
    API_URL + "ecom/usersignup",
    {
      name,
      email,
      password,
      phone,
    },
    axiosConfig
  );
  // console.log(name)
  // console.log(email)
  // console.log(password)
};

// Get by Id
export const getUserDetail = async (_id) => {
  console.log("_id", _id);
  return axios.get(API_URL + `ecom/getuserid?_id=${_id}`, axiosConfig);
};


// Forget Password
export const forgetpassword = async (email) => {
  return axios.post(
    API_URL + "ecom/forgetpassword",
    {
      email
     
    },
    axiosConfig
  );
  // console.log(email);
  // console.log(password);
};

// Reset Password
// export const setPassword=async(password,confirmPassword,token)=>
// {    
//     return await axios.post(API_URL + "ecom/resetpassword",{
//         password,
//         confirmPassword,
//         token}
//     , axiosConfig)
// }


export const setPassword = async (password,confirmPassword,token) => {
  // console.log(password,confirmPassword,token);
  return  await  axios.post(API_URL+`ecom/resetpassword`,
  {password,confirmPassword,token},
  
  axiosConfig)
}

