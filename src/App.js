import logo from "./logo.svg";
import "./App.css";

import { Route, RouterProvider, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import router from "./routes/Routes/Routes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const {isDark} = useContext(AuthContext)
  return (
    <div data-theme= {isDark ? "dark": "light"}>
      <RouterProvider router={router}/>
      <Toaster position="top-right"></Toaster>
    </div>
  );
}

export default App;
