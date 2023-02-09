import React from "react";
import Service from "./Service";
import Servics from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className=" my-12">
      <div className="text-center ">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className=" place-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 ">
        {services.map((service, index) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div>
        <div className="hero">
          <div
            style={{ maxWidth: "100%", gap: "30px" }}
            className=" hero-content flex-col lg:flex-row"
          >
            <img src={treatment} className="lg:max-w-lg md:max-w-xs  rounded-lg shadow-2xl" />
            <div className="lg:w-2/5">
              <h1 className="text-4xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived.
              </p>
           <PrimaryButton> Get Started</PrimaryButton> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
