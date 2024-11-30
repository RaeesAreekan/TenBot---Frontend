import axios from "axios";
// import axiosClient from "./axiosNodeClient";
import axiosFlaskClient from "./axiosFlaskClient";
import { Questrial } from "next/font/google";

const getAnwer = async(question:string)=>{

    const token = localStorage.getItem("token")

    try{
        // console.log('reached falsk client')
        const response = await axiosFlaskClient.post('/get_answer',{question}
            // {
            // headers:{
            //     Authorization:`Bearer ${token}`
            // }}
        )
        // console.log(response.data)

        return response

    }
    catch(err){

        console.log("Error Fetching Data",err)
        alert("Error fetching answers")
        throw err

    }


}

export default getAnwer