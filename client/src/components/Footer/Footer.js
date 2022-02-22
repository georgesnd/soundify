import React from "react";
import '../Footer/Footer.css'
import logo2 from '../Images/logo2.png';
import {BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'

export default function Footer() {

    return(
        <div className="footer">
           

            <div className="footerContainer">

            <div className="footerDiv1">
            <img src={logo2} alt="#"/>
             
            </div>
             <p>Soundify</p>   
            <div className="footerDiv2">
            <ul>
                 <li>COMPANY</li>
                 <li>imprint</li>
                 <li>info</li>
                 <li>jobs</li>
                 <li>For the Record</li>
             </ul>

             <ul>
                 <li>COMMUNITIES</li>
                 <li>Services for artists</li>
                 <li>developers</li>
                 <li>advertising</li>
                 <li>investors</li>
                 <li>suppliers</li>
             </ul>

             <ul>
                 <li>USEFULL LINKS</li>
                 <li>support</li>
                 <li>web player</li>
                 <li>Free mobile app</li>
             </ul>
            </div>

            <div className="footerDiv3">
                    <BsInstagram/>
                    <AiFillTwitterCircle/>
                    <BsFacebook/>
            </div>
            </div>
            
            <h6> Germany &copy; 2022</h6>
             
        </div>
    )
}