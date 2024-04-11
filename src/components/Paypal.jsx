// src/components/PayPalButton.js

import React from "react";

const PayPalButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="paypal-button">
      Donate via PayPal
    </button>
  );
};

export default PayPalButton;
