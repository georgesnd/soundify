import React from "react";
import '../components/HomePage/Home.css';
import {  NavLink} from "react-router-dom"
import logo2 from '../components/Images/logo2.png';
import './HomePage/Home.css'


export default function Header () {

    return(
        <div className='headerContainer'>
            <div className="logo">
                <img src={logo2} alt="#"/>
                <h2>Soundify</h2>
            </div>
            
             <ul>
            <NavLink  className="link" activeClassName="activelink" to="/home"><li>Premium</li></NavLink>
            <NavLink  className="link" activeClassName="activelink" to="/premium"><li>Support</li></NavLink>
            <NavLink className="link" activeClassName="activelink" to="/support"> <li>Download</li></NavLink>
            <NavLink className="link" activeClassName="activelink" to="/download"> <li>|</li></NavLink>
            <NavLink  className="link" activeClassName="activelink" to="/to register"> <li>to Register</li></NavLink>
            <NavLink  className="link" activeClassName="activelink" to="/contacts"> <li>Contact us</li></NavLink>
        </ul>
        </div>
    )
}