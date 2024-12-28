import React from 'react'
import { useNavigate } from 'react-router-dom';



const AdminDashboard = () => {
    
        const navigate=useNavigate();
        const handleLogout = () => {
            navigate('/');
        };
  return (
    <div>

<link rel="stylesheet" href="/css/main.css"/>
    
    <title>AdminDashboard</title>


<body>
    <div class="admindashboard">
       
        <div class="card">
            <a href="/user" class="btn btn-success">User</a>
        
        </div>

       
        <div class="card">
        <a href="/marks" class="btn btn-success">Marks</a>
        
           
            <a href="#" class="button"></a>
        </div>

        <div class="card">
        <a class="btn btn-success" onClick={handleLogout}>Logout</a>
            
            <p></p>
            <a href="#" class="button"></a>
        </div>
    </div>
</body>



    </div>
  )
}

export default AdminDashboard;