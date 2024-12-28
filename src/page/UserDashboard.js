import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username= params.get('username');  // Get username from the URL

  // Use useNavigate for programmatic navigation

  // Navigate to StaffCollection with username as query param
  const startExam = () => {
    navigate(`/new?username=${username}`);
    
  };
  const markdetails = () => {
    navigate(`/exam?username=${username}`);
    
  };
  const handleLogout = () => {
    navigate('/');
    
  };
 

 
 

  return (
    <div>
      <link rel="stylesheet" href="/css/main.css" />
      <title>Dashboard</title>
      <div className="dashboard">
        <div className="card">
          <button onClick={startExam} className="btn btn-success">Start Exam</button>
        </div>
        <div className="card">
          <button onClick={markdetails} className="btn btn-success">Mark Details</button>
        </div>
        <div className="card">
          <button onClick={handleLogout} className="btn btn-success">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
