import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../actions/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeholder')

    }

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              id="paypal"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlfor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="Stripe"
              id="stripe"
              required              
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlfor="stripe">Stripe</label>
          </div>
        </div>
        <div>
            <button className="primary" type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}
