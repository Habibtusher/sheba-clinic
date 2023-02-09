import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const ContactUs = () => {
  return (
    <section
     
      style={{ background: `url(${appointment})`, backgroundPosition: "contain" }}
    >
      <div className="text-center ">
        <h2 className="text-xl text-primary font-bold pt-6">Contact Us</h2>
        <h2 className="text-2xl text-white font-bold">
          Stay connected with us
        </h2>
        <div className="mt-12 pb-10">
          <form>
            <div>
              <input
                type="text"
                placeholder="Enter email"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter subject"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>

            <div className="mt-4 mb-4">
              <textarea
                className="textarea textarea-success textarea-lg w-full max-w-xs"
                placeholder="Enter message"
              ></textarea>
            </div>
            <PrimaryButton>Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
