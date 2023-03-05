import axios from "axios";
import {base_url } from "./BaseUrl";

export const API = axios.create({baseURL:base_url})

API.interceptors.request.use((req)=>{

    if(localStorage.getItem("access_token")){

        req.headers.authorization= `bearer ${localStorage.getItem("access_token")}` 

    }

    return req

});