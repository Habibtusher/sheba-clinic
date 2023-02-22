import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUSLISH_KEY);
const Payment = () => {
  const navigation = useNavigation()
  const { data } = useLoaderData();
  const booking = data.data;
if(navigation.state === "loading"){
  return <Loading/>
}
  return (
    <div>
      <h3 className="text-3xl mb-4">Payment For {booking.treatment}</h3>
      <p className="text-xl">
        {" "}
        Please pay <span className="font-bold">${booking.price} </span>
         for your appointment on {booking.appointmentDate} at{" "}
        {booking.slot}
      </p>
      <div className=" my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm
          booking={booking}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
