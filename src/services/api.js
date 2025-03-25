import axios from "axios";

const LOGIN_URL = "https://dummyjson.com/auth/login";
const PRODUCTS_URL = "https://dummyjson.com/products";

const generateToken = (username) => {
  return `${username}-token-${Date.now()}`;
};


export const loginUser = async (username, password) => {

  if (username === "emilys" && password === "emilypass") {
    return {
      username,
      token: generateToken(username),
    };
  }
  throw new Error("Invalid login credentials  ");
  // try {
  //   // Send request to API
  //   // const response = await axios.post(LOGIN_URL, { username, password });

  //   // If login is successful, return the token
  //   // if (response.data.token) {
  //   //   return response.data;
  //   // }
  // } catch (err) {
  //   console.log(err.response, "error");
  //   console.error(err.message);

  //   // If the API returns "Invalid credentials," create a custom token
  //   if (err.response.status == 400 || err.response.data.message === "Invalid credentials") {   
  //     if (username === "emilys" && password === "emilypass") {
  //       return {
  //         username,
  //         token: generateToken(username),
  //       };
  //     }
  //   } else {
  //     throw new Error("Login failed");
  //   }
  //   // throw new Error("Login failed");
  // }
};

export const fetchProducts = async () => {
    try{
        const response = await axios.get(PRODUCTS_URL);
        return response.data;
    }catch(err){
        console.error(err);
        throw new Error("Failed to fetch products");
    }
};