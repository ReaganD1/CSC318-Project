import React from "react";
import './entry.css';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Entry() {
  const navigate = useNavigate();
    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                <div className="login-buttons">
                    <button className="login-button student-login" onClick={() => navigate('/login')}>
                        <FaUserGraduate className="icon" />
                        Student Login
                    </button>
                    <button className="login-button tutor-login" onClick={() => navigate('/loginP')}>
                        <FaChalkboardTeacher className="icon" />
                        Tutor/Instructor Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Entry;
