import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section className="mt-32 " style={{background:`url(${appointment})`,backgroundPosition:"cover"}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} alt="" className="-mt-40 lg:w-2/4 hidden lg:block " />
          <div>
          <h4 className="text-lg text-primary font-bold">Appointment</h4>
              <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised.
            </p>
           <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
