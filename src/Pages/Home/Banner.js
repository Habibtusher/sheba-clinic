import React from "react";
import chair from "../../assets/images/chair.png";
import "../../App.css";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div class="hero max-h-screen header-container">
      <div
        style={{ maxWidth: "100%", gap: "10px" }}
        class="hero-content flex-col lg:flex-row-reverse"
      >
        <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Start Here</h1>
          <p className="py-6 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <PrimaryButton> Get Started</PrimaryButton> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
