import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
import { format } from "date-fns";
const AppointmentBanner = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div class="heron header-container">
      <div
        style={{ maxWidth: "100%", gap: "20px" }}
        class="hero-content flex-col lg:flex-row-reverse"
      >
        <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
        <div className="mr-6">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
          {/* <PrimaryButton> Get Started</PrimaryButton>  */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
