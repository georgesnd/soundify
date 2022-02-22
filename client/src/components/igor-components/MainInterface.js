 import "./main-interface.css"
 import image1 from "../Assets/rammstein.jpg"
 import {AiOutlinePlayCircle} from "react-icons/ai"
 import {IoPlaySkipForwardSharp} from "react-icons/io5"
 import {IoPlaySkipBackSharp} from "react-icons/io5"
 import {CgPlayPauseO} from "react-icons/cg"
 import {BsShuffle} from "react-icons/bs"
 import {ImLoop2} from "react-icons/im"
 import {BsHeartFill} from "react-icons/bs"

 
 export default function MainInterface() {

    return <div className="main-container">

    
   <div className="image">
      <img src={image1} alt="" />
   </div>

   <div className="artist">
      <h2>Du hast</h2>
      <p>Rammstein</p> 
      <BsHeartFill />
   </div>

   <div className="player">
      <BsShuffle className="icons" />
      <IoPlaySkipBackSharp className="icons" />
      <AiOutlinePlayCircle className="icons" />
      <IoPlaySkipForwardSharp className="icons" />
      <CgPlayPauseO className="icons" />
      <ImLoop2 className="icons" />
   </div>


   
      
    </div>




 }