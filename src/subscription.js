import React, { useState } from "react";
import "./Subscription.css";
import razorpayIcon from "./assets/Razorpay Icon.png";

function SubscriptionBox() {
  const plans = [
    {
      id: 1,
      name: "12 Months Subscription",
      price: 99,
      breakdown: 8,
    },
    {
      id: 2,
      name: "12 Months Subscription",
      price: 179,
      breakdown: 15,
    },
    {
      id: 3,
      name: "6 Months Subscription",
      price: 149,
      breakdown: 25,
    },
    {
      id: 4,
      name: "3 Months Subscription",
      price: 99,
      breakdown: 33,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handleCancel = () => {
    // Logic for cancel button
  };

  const handleProceedToPay = () => {
    // Logic for proceed to pay button
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <div className="subscription-box">
      <div className="page">
        <div className="page-1">
          <i className="bi bi-1-circle-fill"></i>
          <p>Sign up</p>
        </div>
        <div className="page-2">
          <i className="bi bi-2-circle-fill"></i>
          <p>Subscribe</p>
        </div>
      </div>
      <h2>Choose a subscription plan:</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <div>
              <input
                type="radio"
                id={`plan-${plan.id}`}
                name="subscription-plan"
                checked={selectedPlan.id === plan.id}
                onChange={() => handlePlanSelection(plan)}
              />
              <label htmlFor={`plan-${plan.id}`}>
                {plan.name} Total: <span id="price-span">₹{plan.price}</span>
                <br />
                <span id="breakdown">₹{plan.breakdown}/month</span>
                <span></span>
              </label>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div className="offer-tab">
        <span id="span-1">Subscription Fee</span>
        <span id="span-2">₹18,500</span>
      </div>
      <div className="limited-offer">
        <span className="limited-offer-text">Limited time offer</span>
        <span className="limited-offer-price">-₹18,400</span>
        <span className="limited-offer-clock">
          <i class="fa-regular fa-clock"></i>
        </span>{" "}
        <span className="limited-offer-text2">
          offer valid till 25t may 2023
        </span>
      </div>
      <div className="subs">
        <span className="subs-text">
          <strong>Total </strong>(incl. 18% GST)
        </span>
        <span className="subs-price">₹{selectedPlan.price}</span>
      </div>
      <div className="buttons">
        <button id="Cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button id="proceed" onClick={handleProceedToPay}>
          Proceed to Pay
        </button>
      </div>
      <br />
      <br />
      <div className="razorpay">
        <img src={razorpayIcon} alt="razorpay" />
      </div>
    </div>
  );
}

export default SubscriptionBox;
