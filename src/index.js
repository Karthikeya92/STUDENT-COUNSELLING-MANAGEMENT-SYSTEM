import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import StudentHome from './studenthome';
import CounsellorHome from './counsellorhome';
import AdminHome from './adminhome';
import AddStudent from './addstudent';
import ViewStudent from './viewstudent'
import AddCounsellor from './addcounsellor';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
          <Route path="/studenthome" element={<StudentHome/>} />
          <Route path="/counsellorhome" element={<CounsellorHome/>} />
          <Route path="/adminhome" element={<AdminHome/>} />
          <Route path="/addstudent" element={<AddStudent/>}/>
          <Route path="/viewstudent" element={<ViewStudent/>}/>
          <Route path="/addcounsellor" element={<AddCounsellor/>}/>
          
      </Routes>
    </BrowserRouter>

    
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));