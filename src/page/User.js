import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getallUser = () => {
    setLoading(true);
    fetch('http://localhost/online_quiz/get_alluser.php')
        .then(result => result.json())
        .then(responds => {
            setUsers(responds);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching events:", error);
            setLoading(false);
        });
};
  useEffect(() => {
    getallUser();
   
     
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 mx-auto">
        <div className="card">
          <div className="card-body">
            <a href="/cust" className="js-logo-clone">
            
   

              <h2 align="Center"><strong className="text-primary">Users</strong></h2>
            </a>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.full_name}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default User;
