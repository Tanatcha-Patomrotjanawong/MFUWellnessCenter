import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Treatment.css';
import eightImage from '../components/Assets/eight.jpg';
import fiveImage from '../components/Assets/five.jpg';
import fourImage from '../components/Assets/four.jpg';
import nineImage from '../components/Assets/nine.jpg';
import oneImage from '../components/Assets/one.jpg';
import sevenImage from '../components/Assets/seven.jpg';
import sixImage from '../components/Assets/six.jpg';
import threeImage from '../components/Assets/three.jpg';
import twoImage from '../components/Assets/two.jpg';

const TreatmentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isAppointmentPage, setIsAppointmentPage] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    details: '',
    time: '',
  });
  const navigate = useNavigate();

  const treatments = [
    {
      title: 'Acne Removal',
      summary: 'เป็นการรักษาสิวอักเสบ บวมแดง รู้สึกเจ็บ เหมาะกับผู้ที่อยากให้สิวยุบหายเร็วขึ้น...',
      details: `เป็นการรักษาสิวอักเสบ บวมแดง รู้สึกเจ็บ เหมาะกับผู้ที่อยากให้สิวยุบหายเร็วขึ้น ลดการอักเสบ 
                ช่วยลดความเสี่ยงจากการเกิดหลุมสิว\n\n
                บริการกดสิวและฉีดสิวมีให้บริการแล้วที่ คลินิกเวชศาสตร์ชะลอวัยและความงาม ศูนย์บริการสุขภาพ 
                มหาวิทยาลัยแม่ฟ้าหลวง จังหวัดเชียงราย\n\n
                อัตราค่าบริการ: 150 บาทต่อครั้ง`,
      image: oneImage,
    },
    { title: 'Rejuran', summary: 'รีจูรัน (Rejuran) คือโปรแกรมเมโสหน้าใส (MESOTHERAPY) ที่มุ่งเน้นการบำรุงผิว...', details: 'Full details about Rejuran...', image: twoImage },
    { title: 'Facial Analysis', summary: 'Facial analysis เป็นกระบวนการตรวจวิเคราะห์ผิวหน้าที่ประกอบด้วย 7 รูปแบบหลัก...', details: 'Full details about Facial Analysis...', image: threeImage },
    { title: 'CO2 Laser', summary: 'CO2 Laser จะใช้ก๊าซคาร์บอนไดออกไซด์ (CO2) เป็นตัวกลางในการผลิตแสงเลเซอร์...', details: 'Full details about CO2 Laser...', image: fourImage },
    { title: 'Botox', summary: 'โบท็อกซ์ (Botox) คือ สารสกัดจากแบคทีเรียคลอสตริเดียม โบทูลินัม...', details: 'Full details about Botox...', image: fiveImage },
    { title: 'Filler', summary: 'การฉีดฟิลเลอร์เป็นวิธีที่ใช้สำหรับรักษาริ้วรอยและร่องลึกต่าง ๆ บนใบหน้า...', details: 'Full details about Filler...', image: sixImage },
    { title: 'Laser 585', summary: 'เลเซอร์ 585 นาโนเมตร เป็นเทคโนโลยีที่มีประสิทธิภาพในการรักษาปัญหาผิวหนัง...', details: 'Full details about Laser 585...', image: nineImage },
    { title: 'Long Pulse ND YAG', summary: 'Long Pulse ND YAG เป็นเลเซอร์กำจัดขนที่มีความปลอดภัยสูงและสามารถใช้ได้กับทุกสีผิว...', details: 'Full details about Long Pulse ND YAG...', image: eightImage },
    { title: 'Keloid', summary: 'คีลอยด์ คือ ประเภทของรอยแผลเป็นชนิดหนึ่ง มีลักษณะเป็นแผลนูน...', details: 'Full details about Keloid...', image: sevenImage },
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
        navigate('/appointment', { state: { appointment: appointmentData } });
        setIsAppointmentPage(false);
        closeModal();
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
                    <label htmlFor="appointment-time">Choose a Time:</label>
                    <input
                      type="time"
                      id="appointment-time"
                      name="time"
                      value={appointmentData.time}
                      onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
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
