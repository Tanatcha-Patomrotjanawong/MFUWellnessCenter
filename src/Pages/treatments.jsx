import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../CSS/Treatment.css';
import oneImage from '../components/Assets/one.jpg';
import twoImage from '../components/Assets/two.jpg';
import threeImage from '../components/Assets/three.jpg';

const TreatmentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isAppointmentPage, setIsAppointmentPage] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    details: '',
  });
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const treatments = [
    { title: 'Acne Removal', summary: 'Brief description of Acne Removal...', details: 'Full details about Acne Removal...', image: oneImage },
    { title: 'Rejuran', summary: 'Brief description of Rejuran...', details: 'Full details about Rejuran...', image: twoImage },
    { title: 'Facial Analysis', summary: 'Brief description of Facial Analysis...', details: 'Full details about Facial Analysis...', image: threeImage },
    { title: 'CO2 Laser', summary: 'Brief description of CO2 Laser...', details: 'Full details about CO2 Laser...', image: oneImage },
    { title: 'Botox', summary: 'Brief description of Botox...', details: 'Full details about Botox...', image: twoImage },
    { title: 'Filler', summary: 'Brief description of Filler...', details: 'Full details about Filler...', image: threeImage },
  ];

  const openModal = (treatment) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTreatment(null);
    setIsAppointmentPage(false);
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    if (!appointmentData.name || !appointmentData.date) {
      alert('Please fill out all fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // Navigate to the AppointmentPage and pass the appointment data
        navigate('/appointment', { state: { appointment: appointmentData } });

        setIsAppointmentPage(false);
        closeModal(); // Close modal after successful submission
      } else {
        alert(data.message || 'Error submitting appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while scheduling the appointment.');
    }
  };

  return (
    <div className="treatment-page">
      <header className="page-header">
        <h1>Treatments</h1>
        <p>Explore our wide range of beauty treatments and make an appointment today.</p>
      </header>

      <section className="treatment-section">
        <div className="treatment-grid">
          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-card">
              <img src={treatment.image} alt={treatment.title} className="treatment-image" />
              <h3>{treatment.title}</h3>
              <p className="treatment-summary">{treatment.summary}</p>
              <button className="show-more" onClick={() => openModal(treatment)}>
                See More
              </button>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {isAppointmentPage ? (
              <div className="appointment-form">
                <h2>Make Appointment</h2>
                <form onSubmit={handleAppointmentSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={appointmentData.name}
                      onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="appointment-date">Choose a Date:</label>
                    <input
                      type="date"
                      id="appointment-date"
                      name="date"
                      value={appointmentData.date}
                      onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="appointment-details">Additional Details:</label>
                    <textarea
                      id="appointment-details"
                      name="details"
                      value={appointmentData.details}
                      onChange={(e) => setAppointmentData({ ...appointmentData, details: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="submit-button">Submit Appointment</button>
                </form>
              </div>
            ) : (
              <div>
                <h2>{selectedTreatment.title}</h2>
                <p>{selectedTreatment.details}</p>
                <button onClick={() => setIsAppointmentPage(true)} className="make-appointment">
                  Make Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentPage;