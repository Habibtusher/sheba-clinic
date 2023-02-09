import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
const AppointmentBanner = ({selected,setSelected}) => {
 


  return (
    <div class="hero header-container">
      <div
        style={{ maxWidth: "100%", gap: "20px" }}
        class="hero-content flex-col lg:flex-row-reverse"
      >
        <img src={chair} class="lg:max-w-lg md:max-w-xs rounded-lg shadow-2xl" />
        <div className="mr-6">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            
          />
          {/* <PrimaryButton> Get Started</PrimaryButton>  */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
