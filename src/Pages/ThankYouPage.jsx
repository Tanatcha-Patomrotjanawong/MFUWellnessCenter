import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/ThankYouPage.css';

const ThankYouPage = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  if (!orderDetails) {
    return <p className="no-order">Order details not available.</p>;
  }

  return (
    <div className="thank-you-page">
      <h1 className="thank-you-title">Thank you for your order!</h1>
      <div className="order-summary">
        <h2>{orderDetails.product.name}</h2>
        <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
        <p><strong>Additional Details:</strong> {orderDetails.details}</p>
        <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
