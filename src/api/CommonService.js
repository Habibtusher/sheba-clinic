import { API } from "./Interceptors";

const getData = (url)=>API.get(url);
const postData = (url,data)=>API.post(url,data);
const updateData = (url)=>API.put(url);

export {getData,postData,updateData};