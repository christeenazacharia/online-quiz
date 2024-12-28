import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const checkLogin = async (e) => { // Use async/await for cleaner error handling
    e.preventDefault();

    const data = new FormData();
    data.append("username", formData.username);
    data.append("password", formData.password);

    try {
      const response = await fetch('http://localhost/online_quiz/get_login.php', {
        method: "POST",
        body: data
      });

      const loginData = await response.json();

      if (loginData.Status === "true") {
        if (loginData.Role === "admin") {
          alert("Welcome, Admin!");
          navigate(`/admindashboard?username=${formData.username}`);
        } else {
          alert("Welcome, User!");
          navigate(`/dashboard?username=${formData.username}`);
        }
      } else {
        alert(loginData.Message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="login-container"> {/* Main container with clear naming */}
    
      <div className="login-form-wrapper"> {/* Focused wrapper for login form */}
        <form className="login-form" class="row g-3" onSubmit={checkLogin}>
          <h1 className="login-title" style={{ color: 'white'}} >Welcome</h1> {/* Clear heading */}
         
          
          <div className="form-group">
           
         
            <label htmlFor="username"><h8 style={{ color: 'white'}}>Username </h8></label><br></br>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"><h8 style={{ color: 'white'}}>Password </h8></label><br></br>
            <input 
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-auto">
          <button type="submit" className="login-button">
            Login
          </button>
          </div>
        </form>
    
       </div>
      </div>
    
  );
}

export default Login;