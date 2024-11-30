import axios from "axios";
import exp from "constants";
import { config } from "process";

const axiosFlaskClient = axios.create({
    baseURL :'http://127.0.0.1:5001',
    headers:{
        'Content-Type': 'application/json',
    }
})


// to automatically detect tokens which are stored locally 

axiosFlaskClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')

    if(token){
        console.log('fetched token')
        config.headers.Authorization = `Bearer ${token}`
    }

    return config 
})

export default axiosFlaskClient;