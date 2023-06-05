import React, { useState, useEffect } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:5000"; // Replace with your server URL

function Stripepay(props) {
  const [amount, setAmount] = useState(1000);
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    const loadStripePromise = async () => {
      const stripe = await loadStripe(
        "pk_test_51N9WCFSIOtVITHzboUh1jXEneddZZQWBZcKJ4FNhVCawbr0aoOKs6PqJj57btjdq3sVuyYIdp04hukSDKqnmYznN00DuU2zp7k" // Replace with your actual Stripe publishable key
      );
      setStripePromise(stripe);
    };

    loadStripePromise();
  }, []);

  const handleToken = async (token) => {
    try {
      const response = await axios.post(`${API_URL}/create-payment-intent`, {
        amount: amount * 100,
      });
      const { clientSecret } = response.data;

      if (!stripePromise) {
        console.error("Stripe is not initialized");
        return;
      }

      const stripe = await stripePromise;
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: token.id,
          billing_details: {
            name: token.card.name,
          },
        },
      });

      if (result.error) {
        console.error(result.error);
        toast.error("Error processing payment");
      } else {
        console.log("Payment succeeded:", result.paymentIntent);
        // Handle successful payment here

        toast.success("Payment succeeded");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Error processing payment");
    }
  };

  return (
    <div>
      <h1>Stripe Payment Demo</h1>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51N9WCFSIOtVITHzboUh1jXEneddZZQWBZcKJ4FNhVCawbr0aoOKs6PqJj57btjdq3sVuyYIdp04hukSDKqnmYznN00DuU2zp7k" // Replace with your actual Stripe publishable key
        amount={amount}
        currency="USD"
      />
      <ToastContainer />
    </div>
  );
}

export default Stripepay;
