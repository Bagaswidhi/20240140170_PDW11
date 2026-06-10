import React from 'react';
import './App.css';

import profileIMG from './assets/DSCF1214.jpg';
import portfolioIMG1 from './assets/PotraitIMG.jpeg';
import port1 from './assets/port1.jpg';
import port2 from './assets/port2.jpg';
import port3 from './assets/port3.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      <div className="nav-contact">
        <span>📱 774-555-3021</span>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <h1>BAGAS<br />WIDHI</h1>
        <p className="home-description">Creative Photographer & Visual Storyteller</p>
        <h3>Photographer / IT Enthusiast</h3>
        <div className="social-icons">
          <span>Be</span> <span>f</span> <span>in</span> <span>📸</span> <span>🐦</span> <span>💬</span>
        </div>
      </div>
      {/* 2. Tambahkan wadah untuk foto di Home */}
      <div className="home-image">
        <img src={profileIMG} alt="Bagas Widhi Profile" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-text">
        <h2>ABOUT</h2>
        <p className="email">bagas.satya.ft24@mail.umy.ac.id</p>
        <p className="desc">
          Mahasiswa Teknologi Informasi di Universitas Muhammadiyah Yogyakarta.
          Saya memiliki minat yang besar pada pengembangan perangkat lunak, infrastruktur jaringan (Cisco & MikroTik), serta eksplorasi keamanan siber. Saya selalu antusias untuk merancang solusi komputasi yang efektif dan memadukannya dengan antarmuka yang ramah pengguna.
        </p>
        <p className="address">Yogyakarta, Indonesia</p>
      </div>
      <div className="about-image-placeholder">
        <img src={portfolioIMG1} alt="Foto Profil" className="about-portfolio-pic" />
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      {/* Kolom Kiri */}
      <div className="resume-col">
        <h3>TECHNICAL SKILLS</h3>
        <div className="skill-bar"><label>Python & Flask</label><div className="bar"><div className="fill" style={{ width: '85%' }}></div></div></div>
        <div className="skill-bar"><label>React & JS</label><div className="bar"><div className="fill" style={{ width: '80%' }}></div></div></div>
        <div className="skill-bar"><label>Cisco & MikroTik</label><div className="bar"><div className="fill" style={{ width: '90%' }}></div></div></div>
        <div className="skill-bar"><label>Docker & Nginx</label><div className="bar"><div className="fill" style={{ width: '75%' }}></div></div></div>
      </div>

      {/* Kolom Tengah */}
      <div className="resume-col middle-col">
        <h3>PROJECT EXPERIENCE</h3>
        <div className="timeline-item">
          <h4>DevOps Engineer - Group Project</h4>
          <p>Deploy aplikasi menggunakan Docker dan Nginx | Jan 2026</p>
        </div>
        <div className="timeline-item">
          <h4>Academic Researcher</h4>
          <p>Analisis Latensi Wi-Fi Kampus menggunakan Z-score | Jan 2026</p>
        </div>

        <br />
        <h3>EDUCATION</h3>
        <div className="timeline-item">
          <h4>Universitas Muhammadiyah Yogyakarta</h4>
          <p>S1 Teknologi Informasi | 2024 - Sekarang</p>
        </div>
      </div>

      {/* Kolom Kanan */}
      <div className="resume-col">
        <h3>WHAT CAN I DO?</h3>
        <div className="services-container">
          <div className="service-item">
            <div className="service-icon">⚡</div>
            <div className="service-info">
              <h4>Network Engineering</h4>
              <p>Merancang, mengonfigurasi, dan melakukan troubleshooting jaringan berbasis Cisco dan MikroTik.</p>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">🎨</div>
            <div className="service-info">
              <h4>UI/UX & Modern Design</h4>
              <p>Merancang konsep desain antarmuka web/aplikasi yang kekinian dengan fokus pada interaksi pengguna.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="portfolio-header">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="portfolio-grid">
        <div className="glass-card">
          <img src={port1} alt="Sleep Well App" className="portfolio-img" />
          <h3>Sleep Well App</h3>
          <p>Aplikasi dengan konsep UI/UX interaktif yang dirancang untuk membantu pengguna memperbaiki dan menormalkan jam tidur mereka melalui pendekatan personal.</p>
        </div>
        <div className="glass-card">
          <img src={port2} alt="QoS Video Meeting Analysis" className="portfolio-img" />
          <h3>QoS Video Meeting Analysis</h3>
          <p>Studi metode penelitian mengenai analisis Quality of Service (QoS) pada lalu lintas jaringan saat penggunaan aplikasi pertemuan virtual.</p>
        </div>
        <div className="glass-card">
          <img src={port3} alt="COBIT 2019 Enterprise Audit" className="portfolio-img" />
          <h3>COBIT 2019 Enterprise Audit</h3>
          <p>Analisis tata kelola TI pada PT Digital Nusantara Sejahtera menggunakan framework COBIT 2019 untuk tugas studi kasus akademik.</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;