import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./Payment.module.css";

const PaymentWindow = () => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log("Payment processed!");
    // Reset form fields after processing payment
    setAmount("");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };

  return (
    <div>
      <h2>Payment Window</h2>
      <div className={css.linksForHomeandBack}>
        <Link to="/home"> Home</Link>
        <Link to="/usercontainer"> Back</Link>
      </div>

      <form onSubmit={handlePayment}>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentWindow;
