import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";
const Payment = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      })
      .catch((error) => {
        console.log("Error retrieving PaymentIntent:", error);
      });
  }, [clientSecret, stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setMessage("Payment succeeded!");
      } else {
        setMessage("Payment failed.");
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="align-items-start justify-content-center king ">
      <form className="m-3 p-3" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            value={email}
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Card Details</label>
          <CardElement />
        </div>
        <button
          className="btn btn-danger"
          type="submit"
          disabled={!stripe || isLoading}
        >
          {isLoading ? "Processing..." : "Pay"}
        </button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default Payment;
