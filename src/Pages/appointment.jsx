import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/AppointmentPage.css';

const AppointmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state?.appointment;

  if (!appointmentData) {
    return <p className="no-appointment">No appointment data available.</p>;
  }

  return (
    <div className="appointment-page">
      <h1 className="appointment-title">Appointment Details</h1>
      <div className="appointment-details">
        <p><strong>Name:</strong> {appointmentData.name}</p>
        <p><strong>Date:</strong> {new Date(appointmentData.date).toLocaleDateString()}</p>
        <p><strong>Details:</strong> {appointmentData.details}</p>
        <p><strong>Time:</strong> {appointmentData.time}</p> 
      </div>

      <button className="appointment-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default AppointmentPage;
