import axios from "axios";

// Replace with your backend URL
const BASE_URL = "http://103.151.111.170:5000/api/orders/create";  

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error.response?.data || error.message);
    throw error;
  }
};
