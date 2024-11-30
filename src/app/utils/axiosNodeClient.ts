import axios from "axios";

const axiosNodeClient = axios.create({
    baseURL: 'http://localhost:5000', // Change this to your Flask backend URL
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default axiosNodeClient;