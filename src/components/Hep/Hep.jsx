import React from 'react';
import './Hep.css';
import yogaImg from '../Assets/one.jpg';
import spaImg from '../Assets/two.jpg';
import wellnessImg from '../Assets/three.jpg';

const Hep = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-text">
          <h1>MFU Wellness Center</h1>
          <p className="subtext">ศูนย์บริการสุขภาพแบบครบวงจรแห่งภาคเหนือและอนุภาคลุ่มแม่น้ำโขง</p>
          <p className="subtext">มหาวิทยาลัยแม่ฟ้าหลวง</p>
          <button className="shop-button">Read More</button>
        </div>
        <div className="hero-image"></div>
      </div>

      <div className="promotion-section">
        <h2>Our Top Promotions</h2>
        <div className="promo-grid">
          <div className="promo-card">
            <span className="discount-badge">20% OFF</span>
            <img src={yogaImg} alt="Yoga Class" className="promo-image" />
            <h3>Acne Removal</h3>
            <p>การกดฉีดสิว เป็นการรักษาสิวอักเสบ บวมแดง รู้สึกเจ็บ เหมาะกับผู้ที่อยากให้สิวยุบหายเร็วขึ้น ลดการอักเสบ ช่วยลดความเสี่ยงจากการเกิดหลุมสิว</p>
            <button>Read More</button>
          </div>
          <div className="promo-card">
            <span className="discount-badge">15% OFF</span>
            <img src={spaImg} alt="Spa Packages" className="promo-image" />
            <h3>Rejuran</h3>
            <p>มุ่งเน้นการบำรุงผิวโดยการฉีดตัวยาเข้าสู่ชั้นผิวหนังโดยตรง เพิ่มคอลลาเจนให้กับผิว ช่วยฟื้นฟูและแก้ไขปัญหาสุขภาพผิวที่หลากหลาย</p>
            <button>View Packages</button>
          </div>
          <div className="promo-card">
            <span className="discount-badge">10% OFF</span>
            <img src={wellnessImg} alt="Wellness Plans" className="promo-image" />
            <h3>Facial analysis</h3>
            <p>ผู้เชี่ยวชาญจะช่วยประเมินสภาพผิวหน้าอย่างละเอียด เพื่อวางแผนการดูแลและรักษาผิวที่เหมาะสมกับปัญหาของแต่ละบุคคล
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hep;
