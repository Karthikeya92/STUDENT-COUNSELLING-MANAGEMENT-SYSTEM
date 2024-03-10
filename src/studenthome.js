import React from 'react'
import './home.css'
import logouticon from './images/logout.png'
import klulogoicon from './images/klulogo3.png'
import menuicon from './images/menu.png'
import {callApi, errorResponse,getSession,setSession } from './main';



class StudentHome extends React.Component
{

    constructor()
    {
        super()
        this.sid =getSession("sid");
        //alert(this.sid);
        if(this.sid ==="")
            window.location.replace("/");

        var url = "http://localhost:5000/studenthome/uname";
        var data = JSON.stringify({

            regNo : this.sid 
        });
        callApi("POST",url,data,this.loadUname,errorResponse);

        
    }
    loadUname(res)  
    {
    var data =JSON.parse(res);
    var HL1 = document.getElementById("HL1");
    HL1.innerText = `${data[0].regNo}`
    } 
    
    logout()
    {   setSession("sid","",-1);
        window.location.replace("/");
    }
            

    render()
    {
        return(
            <div className='full-height'>
              
                <div className='firstheader'>
                <a href='https://www.kluniversity.in/'><img src={klulogoicon} alt='' className='HS6' /></a>

                    <label className='HS5'>Student Portal </label>
                    <label className='HS7'>- SMS</label>
                    <label id='HL1'  className='HS4'></label>
                </div>
                <div className='secondheader'>
                    
                <label className='HS2' onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' className='HS3' onClick={this.logout} />
                </div>
            
                <div className='content'>
                    <div className='menubar'>
                    <div className='menuheader'>
                            <img src={menuicon} alt='' />
                            <label>MENU</label>
                        </div> 
                    <div className='outlet'></div>
                </div>
                </div>
                <div className='footer'>
                © Copyright 2024 by K L Deemed to be University. All Rights Reserved
                </div>
            </div>
        );
    }
}

export default StudentHome;