import React, { useContext } from "react";
import chair from "../../assets/images/chair.png";
import "../../App.css";
import PrimaryButton from "../Shared/PrimaryButton";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate()
  const {isDark} = useContext(AuthContext)
  return (
    <div className="hero max-h-screen header-container">
      <div
        style={{ maxWidth: "100%", gap: "10px" }}
        className="hero-content flex-col lg:flex-row-reverse"
      >
        <img src={chair} className="lg:max-w-lg md:max-w-xs rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
          <p className= {`${isDark ? "text-white py-6" : "text-gray-600 py-6"} `}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <PrimaryButton onClick={()=>navigate('/appointment')}></PrimaryButton> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
