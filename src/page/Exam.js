import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Exam = () => {
  
 const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username= params.get('username');  // Get username from the URL

  // Use useNavigate for programmatic navigation

  // Navigate to StaffCollection with username as query param

  const goToNewQuiz = () => {
    navigate(`/new?username=${username}`);// Pass username to New.js
  };

  return (
    <div className="row">
      <div className="col-md-12 mx-auto">
        <div className="card">
          <div className="card-body">
            <a href="/cust" className="js-logo-clone">
              <h2 align="Center"><strong className="text-primary"></strong></h2>
            </a>

            <form className="row g-3">
              <div className="col-auto">
                {/* Form elements can go here */}
              </div>
            </form>

            <table className="table table-bordered table-stripped">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>MARK</th>
                </tr>
              </thead>
              {/* Rows for exam results can go here */}
            </table>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
