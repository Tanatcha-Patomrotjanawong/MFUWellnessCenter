import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/AppointmentPage.css';

const AppointmentPage = () => {
  const location = useLocation();
  const appointmentData = location.state?.appointment;

  if (!appointmentData) {
    return (
      <div className="appointment-page">
        <p className="no-appointment">No appointment.</p>
      </div>
    );
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
    </div>
  );
};

export default AppointmentPage;
