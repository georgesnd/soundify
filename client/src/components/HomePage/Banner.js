import React from 'react'
import rammstein from "../Assets/rammstein1.jpg"
import "./styles/MainContainer.css"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {FaHeadphonesAlt} from "react-icons/fa"
import {BsCheckLg} from "react-icons/bs"

export default function Banner() {
  return (
    <div className='banner'>
        <img className='bannerImg' src={rammstein} alt="" />
        <div className="content">
            <div className="breadCrump">
                <p>Home <span>/Rock</span></p>
                <BiDotsHorizontalRounded className="icons" />
                

            </div>

            <div className='artist'>
                <div className="left">
                    <div className="name">
                        <h2>Rammstein</h2>
                    </div>
                    <p><FaHeadphonesAlt className="icons"/> 12.345.445 <span>Monthly listeners</span></p>
                </div>
                <div className="right">
                    <a href="">Play</a>
                    <a href=""> <BsCheckLg  className="icons"/>Following</a>
                </div>
            </div>
        </div>
        <div className='bottomLayer'></div>
    </div>
  )
}
