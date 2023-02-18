import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAvailableAppointmets } from "../../../api/ApiConstant";
import { getData } from "../../../api/CommonService";
import Loading from "../../Shared/Loading";
import AppoinmentOption from "./AppoinmentOption";
import AppointmentMdal from "./AppointmentMdal";

const AvailableAppointment = ({selected}) => {
    // const [appointmentOptions,setAppointmentOptions]= useState([]);
const [teatment,setTreatment] = useState({})
const date =format(selected,'PP')
const {data:appointmentOptions=[],isLoading,refetch} = useQuery({
  queryKey:["appointmentOptions",date] ,
  queryFn: async()=>{
    const res = await getData(`${getAvailableAppointmets}?date=${date}`)
    return res.data.data
  }
});

if(isLoading){
  return <Loading/>
}
  return (
    <section className="mt-6">
      <p className="text-center font-bold text-secondary">
        Available Appointment on  {format(selected, "PP")} 
      </p>
      <div className="mt-4 text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {
            appointmentOptions.map((ele)=> <AppoinmentOption key={ele._id} ele={ele} setTreatment={setTreatment}  />)
        }
      </div>
    {
        teatment && <AppointmentMdal refetch={refetch} selected={selected} setTreatment={setTreatment} teatment={teatment}/>
    }  
    </section>
  );
};

export default AvailableAppointment;
