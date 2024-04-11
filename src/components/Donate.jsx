import React from "react";
import css from "./Donate.module.css"; // Import CSS module
import googlePayQRCode from "./googlePayQRCode.jpg"; // Import the QR code image

const DonateUs = () => {
  const handlePayPalPayment = () => {
    // Open PayPal donation link in a new tab
    window.open(
      "https://paypal.me/deelep?country.x=IN&locale.x=en_GB",
      "_blank"
    );
  };

  return (
    <div>
      <h2>Donate Us</h2>
      <p>Thank you for considering to support us!</p>

      {/* PayPal Button */}
      <button onClick={handlePayPalPayment} className={css["paypal-button"]}>
        Donate via PayPal
      </button>

      {/* Google Pay QR Code */}
      <div>
        <img src={googlePayQRCode} alt="Google Pay QR Code" />
        <p>Scan this QR code to donate via UPI (Google Pay)</p>
      </div>

      {/* Thank You Message */}
      {/* This message will be shown after successful payment */}
      <div>
        <p>Thank you for your donation!</p>
      </div>
    </div>
  );
};

export default DonateUs;
