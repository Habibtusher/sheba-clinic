import React, { useState } from "react";

const AppoinmentOption = ({ ele,setTreatment }) => {
  const [openModal, setOpenModal] = useState(false);
  const { name, slots } = ele;
  return (
    <div className="card  shadow-xl">
      <div className="card-body ">
        <h2 className="card-title justify-center text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Date"}</p>
        <p>
          {slots.length}{" "}
          {slots.length > 1 ? "spaces available" : "space available"}
        </p>
        <div className="card-actions justify-center">
          <label disabled={slots.length===0} onClick={()=>setTreatment(ele)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
        </div>
      </div>
      
    </div>
  );
};

export default AppoinmentOption;
