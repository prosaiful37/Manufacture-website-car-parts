import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe('pk_test_51L4FX8EhNRtswp1ZwHJP122LD0R4H5xqdE02AI2pVAkdn2Ax1VnRrq9nJ1XEEkLfei20jaMQAVWUea6RBmTSuq3T00HbqNgxWl');

const Payment = () => {
  const { paymentId } = useParams();

  const [order, setOrder] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders/${paymentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [paymentId]);
  return (
    <div className="m-5 w-3/5">
     
         
         
            <div class="card-body bg-secondary mb-5">
              <h2 class="card-title">{order.partName}</h2>
              <p className="font-bold">
                Please Pay for Parts Per ${order.price}
              </p>
            </div>

          
          <div class="text-center lg:text-left shadow p-5">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
    </div>
  );
};

export default Payment;
