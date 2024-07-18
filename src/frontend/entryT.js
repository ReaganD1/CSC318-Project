import React from "react";
import './entry.css';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function EntryT() {
  const navigate = useNavigate();
    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Signup</h2>
                <div className="login-buttons">
                    <button className="login-button student-login" onClick={() => navigate('/Signup')}>
                        <FaUserGraduate className="icon" />
                        Student Signup
                    </button>
                    <button className="login-button tutor-login" onClick={() => navigate('/SignupP')}>
                        <FaChalkboardTeacher className="icon" />
                        Tutor/Instructor Signup
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EntryT;