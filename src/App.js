import logo from './logo.svg';
import React, {useState} from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CmpCategory from './page/admin/CmpCategory';
import CmpLogin from './page/CmpLogin';
import CmpRegistration from './page/CmpRegistration';
import CmpCreatejob from './page/admin/CmpCreatejob';
import Layout from './Layout';
import Registration from './Registration';
import Login from './Login';
import Home from './Home';
import UserDashboard from './page/UserDashboard';
import Exam from './page/Exam';
import New from './page/New';
import AdminDashboard from './page/AdminDashboard';
import User from './page/User';
import Marks from './page/Marks';




function App()
 {
  return (
    <div class="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> 
        <Route index element={<Home/>}></Route>
        <Route path='/reg' element={<CmpRegistration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/exam' element={<Exam/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/marks' element={<Marks/>}/>


        
         </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;