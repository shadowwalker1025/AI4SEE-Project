import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
const stripePromise = loadStripe(
  "pk_test_51N9WCFSIOtVITHzboUh1jXEneddZZQWBZcKJ4FNhVCawbr0aoOKs6PqJj57btjdq3sVuyYIdp04hukSDKqnmYznN00DuU2zp7k"
);

const PaymentForm = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch client secret from the server
    fetch("https://backend-umxg.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log("Error fetching client secret:", error);
      });
  }, []);

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <Payment clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default PaymentForm;
