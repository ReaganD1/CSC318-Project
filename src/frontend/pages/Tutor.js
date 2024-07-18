import React from 'react';
import "../styles/Tutor.css";
import { FaChalkboardTeacher, FaBook, FaFlask, FaHistory } from 'react-icons/fa';

const Tutor = () => {
  return (
    <div className="about-us-container">
      <header className="hero-section">
        <h1>Welcome to Tutor Scheduler Pro</h1>
        <p>Your gateway to expert tutoring in Math, English, Science, and History</p>
      </header>
      <section className="goals-section">
        <h2>Our Main Goals</h2>
        <div className="goal-cards">
          <div className="goal-card">
            <FaChalkboardTeacher className="goal-icon" />
            <h3>Expert Tutors</h3>
            <p>Providing access to experienced and qualified tutors in various subjects.</p>
          </div>
          <div className="goal-card">
            <FaBook className="goal-icon" />
            <h3>Personalized Sessions</h3>
            <p>Customized tutoring sessions to cater to individual student needs.</p>
          </div>
          <div className="goal-card">
            <FaFlask className="goal-icon" />
            <h3>Interactive Learning</h3>
            <p>Engaging and interactive sessions to make learning fun and effective.</p>
          </div>
          <div className="goal-card">
            <FaHistory className="goal-icon" />
            <h3>Comprehensive Coverage</h3>
            <p>Covering a wide range of subjects including Math, English, Science, and History.</p>
          </div>
        </div>
      </section>
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Flexible Scheduling</h3>
            <p>Schedule sessions at your convenience with our flexible booking system.</p>
          </div>
          <div className="feature-card">
            <h3>Affordable Rates</h3>
            <p>Quality education at prices that won't break the bank.</p>
          </div>
          <div className="feature-card">
            <h3>Proven Success</h3>
            <p>Helping students achieve their academic goals with proven methods.</p>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <p>&copy; 2024 Tutor Scheduler Pro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Tutor;
