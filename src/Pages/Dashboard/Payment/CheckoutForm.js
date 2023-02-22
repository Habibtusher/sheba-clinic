import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PAYMENTS } from "../../../api/ApiConstant";
import { base_url } from "../../../api/BaseUrl";
import { postData } from "../../../api/CommonService";

const CheckoutForm = ({ booking }) => {
  const { price, email, patient,_id } = booking;
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const [confirmPayment, setConfirmPayment] = useState();
  const [transactionId, setTransactionId] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${base_url}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      
      setCardError(error.message);
    } else {
      setConfirmPayment("")
      setCardError("");
      setProcessing(true)
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: patient,
              email: email,
            },
          },
        });
        if(confirmError){
          setCardError(confirmError.message)
          return
        }
        if(paymentIntent.status === "succeeded"){
        
          const data = {
              price,
              transactionId:paymentIntent.id,
              email,
              bookingId:_id
          }
          const res = await postData(PAYMENTS,data)
          console.log("🚀 ~ file: CheckoutForm.js:75 ~ handleSubmit ~ res:", res)        
         if(res.data.status === 'success'){
          setConfirmPayment("Congrats! payment complete.")
          setTransactionId(paymentIntent.id)
         }
        }
        setProcessing(false)
    }
  };

  return (
    <div className="card w-1/3 bg-base-100 shadow-xl p-6">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="card-actions justify-start">
            <button
              className="btn btn-primary btn-sm mt-5 text-white"
              type="submit"
              disabled={!stripe || !clientSecret || processing || transactionId}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
      <p className="text-red-500">{cardError}</p>
      {
        confirmPayment && <div>
           <p className="text-green-500">{confirmPayment}</p>
           <p className="">Your Transaction Id: <span className="font-bold">{transactionId}</span></p>
        </div>
      }
    </div>
  );
};

export default CheckoutForm;
