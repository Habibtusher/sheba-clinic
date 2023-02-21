import { API } from "./Interceptors";

const getData = (url)=>API.get(url);
const postData = (url,data)=>API.post(url,data);
const updateData = (url)=>API.put(url);
const remove = (url)=>API.delete(url);

export {getData,postData,updateData,remove};