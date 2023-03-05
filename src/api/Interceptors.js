import axios from "axios";
import { toast } from "react-hot-toast";
import { base_url } from "./BaseUrl";

export const API = axios.create({ baseURL: base_url });
const token =localStorage.getItem("access_token")
API.interceptors.request.use((req) => {
  if (token) {
    req.headers.authorization = `bearer ${token}`;
  }

  return req;
});
API.interceptors.response.use(
  (response) => {
  
    return response;
  },

  (error) => {
    console.log("object,",error);
    if (error && error.response) {
     
      if (
       (error.response.status === 401 &&
          error.response.data.code === "UNAUTHORIZED") ||
        error.response.status === 403
      ) {
        
        toast.error(error.response.data.message);
      }

      if (error.response.status === 404) {
        toast.error(error.response.data.message);
      }

      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      }

      if (error.response.status === 500) {
        toast.error("internal server error");
      }

      if (error.response.status === 508) {
        toast.error(error.response.data.message);
      }
    }

    return error;
  }
);
