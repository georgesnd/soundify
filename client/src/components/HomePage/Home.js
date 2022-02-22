import React from "react";
import background5 from '../Images/background5.png';
import '../HomePage/Home.css';
import Login from "../login/Login.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import {BiCheckboxChecked }from 'react-icons/bi'
import logo2 from '../Images/logo2.png';

export default function Home () {

    const [popOut, setPopOut] = useState(false);
    const handlePopUps = (e) => {
    setPopOut(true);
  };

    return (
        <div className="home">
            

            <div className="hometext">
            <h1 className="title1">Music speaks</h1>
            <h1 className="title2">all languages</h1>
            <p>Millions of songs and podcasts. Login and start listening.</p>
             <button onClick={handlePopUps} className='homeButton'>Login</button>
            <div className="login">
               
                <Login onClick={popOut} setonClick={setPopOut}>
                    
                <form className="form">
                    <div className="loginLogo">
                        <img src={logo2} alt="#"/>
                        <p>Soundify</p>
                    </div>
                
                    <hr className="line"/>   
                    <div className="insideForm">

                   
                    <label>E-mail or username</label> <br/>
                    <input type="text" placeholder="Email address or username" required /> <br/>
                    <label>Password</label> <br/>
                    <input type="Password" placeholder="Password" required /> <br/>
                    <label>Forgot your password?</label> 
                    
                    <div className="checkbox">
                        
                       <BiCheckboxChecked/><p>Remember me</p>  
                       <input type='submit' value='Login'/>
                    </div>
                    
                     </div>
                    <hr/>
                    <h6>Don't have an account?</h6>
                    <button className='register' style={{color: "black", backgroundColor: "darkBlue", width:'300px', marginLeft:'100px', borderRadius:'20px', height:'40px'}} >
                    <Link  href="/login">
                    <a>CREATE ACCOUNT</a>
                    </Link>
                    </button>
                   
                </form>
                </Login>
            </div>
             
            </div>
            <img src={background5} className="backgroundB" alt="#"/>
            
           
        </div>
    )
}