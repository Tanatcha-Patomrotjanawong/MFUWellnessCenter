import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Product.css';  
import P1 from '../components/Assets/p1.jpg';
import P2 from '../components/Assets/p2.jpg';

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [details, setAdditionalDetails] = useState('');
  const navigate = useNavigate();

  const products = [
    {
      name: 'Eucerin DERMOPURE Cleansing Gel 200ml',
      price: 630.0,
      image: P1,
    },
    {
      name: 'Eucerin DermoPurifyer Triple Effect Serum 40ml',
      price: 150,
      image: P2,
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handlePreOrder = async (e) => {
    e.preventDefault();
  
    if (!quantity || !details) {
      alert('Please fill out all fields!');
      return;
    }
  
    const newOrder = {
      product: selectedProduct,
      quantity,
      details,
      orderId: Math.random().toString(36).substr(2, 9), // Generate a unique order ID
    };
  
    try {
      const response = await fetch('http://localhost:4000/preorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Retrieve existing orders and append the new one
        const existingOrders = JSON.parse(localStorage.getItem('preOrderList')) || [];
        const updatedOrders = [...existingOrders, { ...newOrder, ...data }];
        localStorage.setItem('preOrderList', JSON.stringify(updatedOrders));
  
        setIsModalOpen(false);
        navigate('/thankyou');
      } else {
        alert(data.message || 'Error submitting pre-order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the pre-order.');
    }
  };

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem('preOrderDetails'));
    if (savedDetails) {
      setSelectedProduct(savedDetails.product);
      setQuantity(savedDetails.quantity);
      setAdditionalDetails(savedDetails.details);
    }
  }, []);

  return (
    <div className="product-page">
      <header className="page-header">
        <h1>Our Products</h1>
        <p>Select the product for pre-order.</p>
      </header>

      <section className="product-section">
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">฿{product.price.toLocaleString()}</p>
              <button className="pre-order" onClick={() => openModal(product)}>
                Pre-order
              </button>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProduct.name}</h2>
            <p>Price: ฿{selectedProduct.price.toLocaleString()}</p>
            <form onSubmit={handlePreOrder}>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="additional-details">Additional Details:</label>
                <textarea
                  id="additional-details"
                  name="details"
                  value={details}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Write any additional requests here..."
                />
              </div>

              <button type="submit" className="submit-preorder">Submit Pre-order</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
