// appointment.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const AppointmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state?.appointment;

  if (!appointmentData) {
    return <p>No appointment data available.</p>;
  }

  return (
    <div className="appointment-page">
      <h1>Appointment Details</h1>
      <div className="appointment-details">
        <p><strong>Name:</strong> {appointmentData.name}</p>
        <p><strong>Date:</strong> {new Date(appointmentData.date).toLocaleDateString()}</p>
        <p><strong>Details:</strong> {appointmentData.details}</p>
      </div>

      <button className="appointment-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default AppointmentPage;
