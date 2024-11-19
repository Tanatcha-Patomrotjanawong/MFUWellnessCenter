import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import '../CSS/AppointmentPage.css';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState(() => {
    try {
      const savedAppointments = localStorage.getItem('appointments');
      return savedAppointments ? JSON.parse(savedAppointments) : [];
    } catch (error) {
      console.error('Error reading appointments from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const deleteAppointment = (indexToDelete) => {
    const updatedAppointments = appointments.filter((_, index) => index !== indexToDelete);
    setAppointments(updatedAppointments);
  };

  const renderAppointmentList = () => {
    if (appointments.length === 0) {
      return <p className="no-appointment">Not found an appointment, please get some appointment</p>;
    }

    return (
      <ul className="appointment-list">
        {appointments.map((appointment, index) => (
          <li key={index} className="appointment-item">
            <p><strong>Name:</strong> {appointment.name}</p>
            <p>
              <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <p><strong>Details:</strong> {appointment.details}</p>
            <button 
              className="delete-button" 
              onClick={() => deleteAppointment(index)}>
              <FaTrash className="trash-icon" /> {}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="appointment-page">
      <h1 className="appointment-title">All Appointments</h1>
      {renderAppointmentList()}
    </div>
  );
};

export default AppointmentPage;
