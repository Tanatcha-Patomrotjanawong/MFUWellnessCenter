import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; 
import '../CSS/ThankYouPage.css';

const ThankYouPage = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('preOrderList')) || [];
    setOrderList(savedOrders);
  }, []);

  const handleDelete = (index) => {
    const updatedOrders = orderList.filter((_, i) => i !== index);
    setOrderList(updatedOrders);
    localStorage.setItem('preOrderList', JSON.stringify(updatedOrders));
  };

  if (orderList.length === 0) {
    return (
      <div className="thank-you-page">
        <h1 className="thank-you-title">No Pre-orders Available</h1>

      </div>
    );
  }

  return (
    <div className="thank-you-page">
      <h1 className="thank-you-title">Your Pre-orders</h1>
      <div className="order-list">
        {orderList.map((order, index) => (
          <div key={index} className="order-item">
            <h2>{order.product.name}</h2>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Additional Details:</strong> {order.details}</p>
            <p><strong>Order ID:</strong> {order.orderId || 'N/A'}</p>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              <FaTrash className="trash-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThankYouPage;
