import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51N9WCFSIOtVITHzboUh1jXEneddZZQWBZcKJ4FNhVCawbr0aoOKs6PqJj57btjdq3sVuyYIdp04hukSDKqnmYznN00DuU2zp7k";
const stripePromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
