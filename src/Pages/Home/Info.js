import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
      <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock} />
      <InfoCard bgClass="bg-accent" cardTitle="Our Locations" img={marker} />
      <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phone} />
    </div>
  );
};

export default Info;
