import axios from "axios";

const LOGIN_URL = "https://dummyjson.com/auth/login";
const PRODUCTS_URL = "https://dummyjson.com/products";



export const loginUser = async ( username, password ) => {
    try{
        const response = await axios.post(LOGIN_URL, { username, password });
        return response.data;
        
    }catch(err){
        console.error(err);
        throw new Error("Login failed");
    }
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