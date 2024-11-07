import React, { useState } from 'react';
import '../CSS/Treatment.css'; // Correct path to your CSS file

// Import images for treatments
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
    details: ''
  });

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

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMakeAppointment = () => {
    setIsAppointmentPage(true);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();

    if (!appointmentData.name || !appointmentData.date) {
      alert("Please fill out all fields!");
      return;
    }

    alert('Your appointment has been successfully submitted!');
    setIsAppointmentPage(false);
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
              <img src={treatment.image} alt={treatment.title} className="treatment-image"/>
              <h3>{treatment.title}</h3>
              <p className="treatment-summary">{treatment.summary}</p>
              <button className="show-more" onClick={() => openModal(treatment)}>
                See More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Full Treatment Details and Make Appointment Modal */}
      {isModalOpen && !isAppointmentPage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedTreatment.title}</h2>
            <p className="treatment-details">{selectedTreatment.details}</p>
            <button className="make-appointment" onClick={handleMakeAppointment}>
              Make Appointment
            </button>
          </div>
        </div>
      )}

      {/* Make Appointment Form Modal */}
      {isAppointmentPage && (
        <div className="modal">
          <div className="modal-content appointment-form">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Make Appointment</h2>
            <form onSubmit={handleAppointmentSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={appointmentData.name}
                  onChange={handleAppointmentChange}
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
                  onChange={handleAppointmentChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="appointment-details">Additional Details:</label>
                <textarea
                  id="appointment-details"
                  name="details"
                  rows="4"
                  value={appointmentData.details}
                  onChange={handleAppointmentChange}
                />
              </div>
              <button type="submit" className="submit-appointment">Submit Appointment</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentPage;
