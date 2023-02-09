import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentOption from "./AppoinmentOption";
import AppointmentMdal from "./AppointmentMdal";

const AvailableAppointment = ({selected}) => {
    const [data,setData]= useState([]);
const [teatment,setTreatment] = useState({})
 
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
  
  return (
    <section className="mt-6">
      <p className="text-center font-bold text-secondary">
        Available Appointment on  {format(selected, "PP")} 
      </p>
      <div className="mt-4 text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {
            data.map((ele)=> <AppoinmentOption key={ele.id} ele={ele} setTreatment={setTreatment}  />)
        }
      </div>
    {
        teatment && <AppointmentMdal selected={selected} setTreatment={setTreatment} teatment={teatment}/>
    }  
    </section>
  );
};

export default AvailableAppointment;
