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
                ช่วยลดความเสี่ยงจากการเกิดหลุมสิว<br /><br />
                บริการกดสิวและฉีดสิวมีให้บริการแล้วที่ คลินิกเวชศาสตร์ชะลอวัยและความงาม ศูนย์บริการสุขภาพ 
                มหาวิทยาลัยแม่ฟ้าหลวง จังหวัดเชียงราย<br /><br />
                <div class="price-highlight">อัตราค่าบริการ: 150 บาทต่อครั้ง</div><br /><br />`,
      image: oneImage,
    },
    {
      title: 'Rejuran',
      summary: 'รีจูรัน (Rejuran) คือโปรแกรมเมโสหน้าใส (MESOTHERAPY) ที่มุ่งเน้นการบำรุงผิว...',
      details: `รีจูรัน (Rejuran) คือโปรแกรมเมโสหน้าใส (MESOTHERAPY) ที่มุ่งเน้นการบำรุงผิวโดยการฉีดตัวยาเข้าสู่ชั้นผิวหนังโดยตรง ซึ่งมีบทบาทสำคัญในการเพิ่มคอลลาเจนให้กับผิว ช่วยฟื้นฟูและแก้ไขปัญหาสุขภาพผิวที่หลากหลาย เช่น จุดหมองคล้ำ หลุมสิว ความมันของผิว และรูขุมขนกว้าง พร้อมทั้งช่วยให้ผิวดูกระจ่างใสขึ้น<br /><br />
                <br />
                <strong>คุณสมบัติของโพลี่นิวคลีโอไทด์ (Polynucleotide)</strong><br />
                โพลี่นิวคลีโอไทด์ (Polynucleotide) เป็นสารสำคัญที่ได้มาจากชิ้นส่วน DNA ของปลาแซลมอนที่อาศัยอยู่ในทะเลธรรมชาติ โดยการสกัดนี้ใช้เทคโนโลยีที่ได้รับสิทธิบัตรซึ่งเรียกว่า DOT ซึ่งช่วยรักษาคุณภาพและประสิทธิภาพของสารได้เป็นอย่างดี นอกจากนี้ โพลี่นิวคลีโอไทด์ยังมีลักษณะเป็นสารละลายชนิดเจลใสที่ปราศจากสี ทำให้สามารถนำไปใช้ในการรักษาผิวได้อย่างปลอดภัยและมีประสิทธิภาพ อีกทั้งเมื่อเข้าสู่ร่างกาย โพลี่นิวคลีโอไทด์จะค่อยๆ สลายตัวในระยะเวลาหนึ่ง โดยในขณะเดียวกันจะช่วยบำรุงรักษาโครงสร้างของผิวหนังให้แข็งแรงและมีสุขภาพดียิ่งขึ้น<br /><br />
                <div class="price-highlight">อัตราค่าบริการ: 12,000 บาทต่อครั้ง</div><br /><br />`,
      image: twoImage,
    },
    { title: 'Facial Analysis', summary: 'Facial analysis เป็นกระบวนการตรวจวิเคราะห์ผิวหน้าที่ประกอบด้วย 7 รูปแบบหลัก...',  details: `Facial analysis เป็นกระบวนการตรวจวิเคราะห์ผิวหน้าที่ประกอบด้วย 7 รูปแบบหลัก ได้แก่ ขนาดของรูขุมขน, ริ้วรอย, จุดด่างดำ, ความสม่ำเสมอของสีผิว, ความมันบนผิว, ปริมาณของ Porphyrin, ความยืดหยุ่นของผิว และความชุ่มชื้น โดยสามารถนำเสนอข้อมูลที่ได้ในหลากหลายรูปแบบ ทั้งกราฟ ตัวเลข และภาพสามมิติ ซึ่งช่วยให้ผู้เชี่ยวชาญสามารถประเมินสภาพผิวหน้าได้อย่างละเอียดและแม่นยำมากยิ่งขึ้น ทั้งนี้เพื่อวางแผนการดูแลและรักษาผิวที่เหมาะสมกับปัญหาของแต่ละบุคคลได้อย่างมีประสิทธิภาพ<br /><br />
      <div class="price-highlight">อัตราค่าบริการ: 200 บาทต่อครั้ง</div><br /><br />`,
image: threeImage, },
{
  title: 'CO2 Laser',
  summary: 'CO2 Laser จะใช้ก๊าซคาร์บอนไดออกไซด์ (CO2) เป็นตัวกลางในการผลิตแสงเลเซอร์...',
  details: `CO2 Laser คือ เครื่องเลเซอร์ที่สามารถใช้รักษาโรคทางผิวหนัง แก้ปัญหาส่วนเกินที่ไม่ต้องการ ไม่ว่าจะเป็น รักษาสิว เลเซอร์หน้าใส รักษาติ่งเนื้อ เป็นต้น<br /><br />
            โดย CO2 Laser จะใช้ก๊าซคาร์บอนไดออกไซด์ (CO2) เป็นตัวกลางในการผลิตแสงเลเซอร์ที่มีความยาวช่วงคลื่น 10,600 นาโนเมตร เพื่อทำลายเนื้อเยื่อ หรือบริเวณจุดที่ต้องการรักษาให้เนื้อเยื่อบริเวณนั้นตายไป และไม่สร้างความเสียหายต่อเนื้อเยื่อรอบ ๆ เลเซอร์ชนิดนี้จึงถูกนำมาใช้ทางการแพทย์เพื่อรักษาโรคต่าง ๆ โดย CO2 Laser จะมีชื่อภาษาไทยว่า คาร์บอนไดออกไซด์เลเซอร์<br /><br />
            <strong>ประเภทการบริการและอัตราค่าบริการ</strong><br />
            - CO2 Laser 1-11 mm. ราคา 650 บาทต่อครั้ง<br />
            - CO2 Laser 1-20 mm. ราคา 1,000 บาทต่อครั้ง<br />
            - CO2 Laser 21 mm. ขึ้นไป ราคา 2,000 บาทต่อครั้ง<br /><br />`,
  image: fourImage,
},
{
  title: 'Botox',
  summary: 'โบท็อกซ์ (Botox) คือ สารสกัดจากแบคทีเรียคลอสตริเดียม โบทูลินัม...',
  details: `โบท็อกซ์ (Botox) คือ สารสกัดจากแบคทีเรียคลอสตริเดียม โบทูลินัม (Clostridium Botulinum) ซึ่งมีอยู่ 7 ชนิด โดยชนิดที่ใช้ในวงการเสริมความงามคือ Botulinum toxin type A ที่ได้รับการรับรองความปลอดภัยจากองค์การอาหารและยา (อย.) ในหลายประเทศ โบท็อกซ์ถูกใช้เพื่อปรับรูปหน้าให้เรียว ลดริ้วรอย รวมถึงช่วยรักษาโรคบางอย่าง เช่น ไมเกรนและอาการปวดกล้ามเนื้อเรื้อรังจาก Office Syndrome นอกจากนี้ยังช่วยลดเหงื่อและกลิ่นตัว ทำให้เป็นหัตถการยอดนิยมในประเทศไทย<br /><br />
            <strong>ประเภทการบริการและอัตราค่าบริการ</strong><br />
            - BOTOX (Neuronox) 50 Units: 6,300 บาทต่อขวด<br />
            - BOTOX (Nabota) 100 Units: 10,000 บาทต่อขวด<br />
            - BOTOX (Allergan) 50 Units: 10,000 บาทต่อขวด<br /><br />`,
  image: fiveImage,
},
{
  title: 'Filler',
  summary: 'การฉีดฟิลเลอร์เป็นวิธีที่ใช้สำหรับรักษาริ้วรอยและร่องลึกต่าง ๆ บนใบหน้า...',
  details: `การฉีดฟิลเลอร์เป็นวิธีที่ใช้สำหรับรักษาริ้วรอยและร่องลึกต่าง ๆ บนใบหน้า โดยการฉีดสารเติมเต็มประเภทไฮยาลูโรนิก แอซิด (Hyaluronic Acid หรือ HA) เข้าไปในชั้นผิวที่เริ่มเสื่อมสภาพและยุบตัวเมื่ออายุมากขึ้น ฟิลเลอร์ช่วยทำให้ผิวหน้ากลับมาเรียบเนียน เต่งตึง และทำให้ใบดูอ่อนเยาว์ลง นอกจากนี้ ฟิลเลอร์ยังมีคุณสมบัติในการอุ้มน้ำ ซึ่งช่วยเพิ่มความชุ่มชื้นให้กับผิว ทำให้ผิวเปล่งปลั่งและช่วยชะลอการเกิดริ้วรอยในอนาคต<br /><br />
            <strong>ประเภทการบริการและอัตราค่าบริการ</strong><br />
            - Filler (Vital Light): 10,800 บาทต่อซีซี<br />
            - Filler (Neuramis Deep Lidocaine): 5,500 บาทต่อครั้ง<br />
            - Filler (E.P.T.Q Lidocaine 100): 6,000 บาทต่อครั้ง<br />
            - Filler (E.P.T.Q Lidocaine 300): 6,000 บาทต่อครั้ง<br /><br />`,
  image: sixImage,
},
{
  title: 'Laser 585',
  summary: 'เลเซอร์ 585 นาโนเมตร เป็นเทคโนโลยีที่มีประสิทธิภาพในการรักษาปัญหาผิวหนัง...',
  details: `เลเซอร์ 585 นาโนเมตร (585 nm Laser) เป็นเทคโนโลยีที่มีประสิทธิภาพในการรักษาปัญหาผิวหนังที่เกี่ยวกับรอยแดงและเส้นเลือด โดยเฉพาะการรักษาปัญหาที่เกิดจากเส้นเลือดฝอยที่ขยายหรือแตกผิดปกติ ซึ่งทำให้เกิดรอยแดงบนผิวหนัง เลเซอร์ชนิดนี้ยังเหมาะสำหรับการรักษาอาการต่าง ๆ เช่น รอยแดงนูนจากเส้นเลือดผิดปกติ ปานแดง รอยแดงที่เกิดจากสิวอักเสบ และรอยแดงจากแผลเป็น รวมถึงรอยแดงหลังการผ่าตัด เลเซอร์ 585 ยังช่วยลดรอยฟกช้ำได้เป็นอย่างดี<br /><br />
            สำหรับผู้ที่มีปัญหาผิวหน้าแดงง่าย ผิวหน้าบาง และผู้ที่เป็นโรคผิวหนังอักเสบเซบเดิร์ม (seborrheic dermatitis) เลเซอร์นี้ช่วยลดการระคายเคืองและรอยแดงบนผิวหน้าได้อย่างมีประสิทธิภาพ<br /><br />
            <strong>ประเภทการบริการและอัตราค่าบริการ</strong><br />
            - Laser 585 กำจัดปานแดง: 4,000 บาทต่อครั้ง<br />
            - Laser 585 กำจัดรอยสิว: 1,500 บาทต่อครั้ง<br />
            - Laser 585 กำจัดรอยเส้นเลือดฝอย: 2,000 บาทต่อครั้ง<br /><br />`,
  image: nineImage,
}
,
{
  title: 'Long Pulse ND YAG',
  summary: 'Long Pulse ND YAG เป็นเลเซอร์กำจัดขนที่มีความปลอดภัยสูงและสามารถใช้ได้กับทุกสีผิว...',
  details: `Long Pulse ND YAG เป็นเลเซอร์กำจัดขนที่มีความปลอดภัยสูงและสามารถใช้ได้กับทุกสีผิว โดยไม่ทำให้เกิดอันตรายต่อผิว ความยาวของลำแสงอยู่ที่ 1,064 nm ซึ่งทำให้เลเซอร์ชนิดนี้มีความเข้มข้นสูงของแสงที่ถูกออกแบบมาเพื่อทำลายรากขนโดยเฉพาะ และไม่ทำลายผิวหนังบริเวณข้างเคียง ขณะยิงเลเซอร์ Long Pulse ND YAG จะมี Dynamic Cooling Device ซึ่งทำหน้าที่ปล่อยก๊าซเย็นออกมา พร้อมๆ กับการทำเลเซอร์ จึงทำให้กับผิวชั้นบนเย็นสบายไม่รู้สึกเจ็บหรือแสบร้อนในขณะทำเลเซอร์<br /><br />
            <strong>ประเภทการบริการและอัตราค่าบริการ</strong><br />
            - Long Pulse ND YAG กำจัดขนรักแร้: 2,000 บาทต่อครั้ง<br />
            - Long Pulse ND YAG กำจัดหนวด: 1,500 บาทต่อครั้ง<br />
            - Long Pulse ND YAG กำจัดหนวด เครา: 2,500 บาทต่อครั้ง<br />
            - Long Pulse ND YAG กำจัดขนหน้าแข้ง: 4,000 บาทต่อครั้ง<br />
            - Long Pulse ND YAG กำจัดรอยเส้นเลือดฝอย: 2,000 บาทต่อครั้ง<br /><br />`,
  image: eightImage,
},
{
  title: 'Keloid',
  summary: 'คีลอยด์ คือ ประเภทของรอยแผลเป็นชนิดหนึ่ง มีลักษณะเป็นแผลนูน...',
  details: `คีลอยด์ คือ ประเภทของรอยแผลเป็นชนิดหนึ่ง มีลักษณะเป็นแผลนูน แดง มีการขยายใหญ่ออกนอกขอบเขตบาดแผลเดิม อาจมีอาการคัน เจ็บ และรู้สึกผิวตึงรั้งร่วมด้วย เมื่อทิ้งไว้จะคงอยู่และไม่ยุบแบนราบลงได้เอง ยิ่งไปกว่านั้น ในบางรายอาจมีขนาดโตขึ้นกว่าเดิม แม้ว่าแผลคีลอยด์ไม่ก่อให้เกิดอันตรายใด ๆ แต่ส่งผลด้านความสวยงามและสภาพจิตใจได้<br /><br />
            <div class="price-highlight">อัตราค่าบริการ: 350 บาทต่อจุด</div><br /><br />`,
  image: sevenImage,
},
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
        
        // Retrieve current appointments from localStorage
        const currentAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        // Add the new appointment
        const updatedAppointments = [...currentAppointments, appointmentData];
        // Save back to localStorage
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  
        navigate('/appointment');
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
                <div dangerouslySetInnerHTML={{ __html: selectedTreatment.details }} />
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
