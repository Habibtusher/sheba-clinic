import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/appointment" element={<Appointment/>} />
      <Route path="/login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
