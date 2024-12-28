import React, { useEffect, useState } from 'react';

const CmpRegistration = () => {

  const[formData,setFormData]=useState({
    full_name:'',
    address:'',
    email:'',
    phone:'',
    password:''
    })

    const handle_change=(e)=>{
      let name= e.target.name;
      let value= e.target.value;
        setFormData({
          ...formData,[name]:value
        })
      
    }



  const save_registration=(e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append("full_name", formData.full_name);
    data.append("address", formData.address);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("password", formData.password);
    fetch('http://localhost/online_quiz/save_registration.php',{
      method: "POST",
      body:data
    })
    .then((result)=>{
      return result.json()
    })
    .then((data)=>{
      if(data.status==="true")
      {
       alert("successfully registered");
      }
      else
      {
        alert(data.message);
      }
    })
    }
    return (
    <div class="container"> 
    <div class="col-md-6">

        <h1 style={{ color: 'white'}}> Registration</h1>
      
        <form class="row g-3" onSubmit={save_registration}>
    <div class="form-group">
        <label><h8 style={{ color: 'white'}}>Full Name </h8></label><br></br>
        <input type='text' onChange={handle_change} name="full_name" class="input-form"/>
    </div>
    <div class="form-group">
        <label><h8 style={{ color: 'white'}}> Address </h8> </label><br></br>
        <input type='textarea' onChange={handle_change} name="address" class="input-form"/>
        </div>
        <div class="form-group">
        <label><h8 style={{ color: 'white'}}> Phone </h8> </label><br></br>
        <input type='number' onChange={handle_change} name="phone" class="input-form"/>
        </div>
        
        <div class="form-group">
        <label><h8 style={{ color: 'white'}}>  Email</h8> </label><br></br>
        <input type='email' onChange={handle_change} name="email" class="input-form"/>
        </div>
        <div class="form-group">
        <label><h8 style={{ color: 'white'}}>Password </h8> </label><br></br>
        <input type='password' onChange={handle_change} name="password" class="input-form"/>
        </div><br></br>
        <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Save</button>
        </div>
   </form>         
      
    </div>
    </div>
  )
}

export default CmpRegistration;