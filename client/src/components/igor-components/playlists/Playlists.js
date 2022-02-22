import React from "react";
import "./playlists.css";
import image1 from "../../Assets/catmusic.jpg";
import image2 from "../../Assets/deep house.jpg";
import image3 from "../../Assets/Lofi_girl_logo.jpg";
import image4 from "../../Assets/tomorrowland.jpg";
import image5 from "../../Assets/trans.jpg";
import image6 from "../../Assets/chillout.jpg";
import link1 from "../../Assets/music-cards/linkin.jpg"
import link2 from "../../Assets/music-cards/end.jpg"
import link3 from "../../Assets/music-cards/somewhere.jpg"
import { ImPlay } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";

export default function Playlists() {
  return (
    <div className="playlists">
            <div className="title">
          <h1>Recent Tracks</h1>
      </div>
      <div className="track-container">
          <div className="box2">
              <img src={link1} alt="" />
              <p>now playing</p>
              <h3>Linkin Park</h3>
              <p>Numb</p>
             
          </div>
          <div className="box2">
              <img src={link2} alt="" />
              <p>10 min ago</p>
              <h3>Linkin Park</h3>
              <p>In the end</p>
             
          </div>
          <div className="box2">
              <img src={link3} alt="" />
              <p>15 min ago</p>
              <h3>Linkin Park</h3>
              <p>somewhere i belong</p>
             
          </div>
      </div>

      <div className="title">
        <h1>
          <ImPlay />
          Playlists
        </h1>
      </div>

      <div className="cards-container">
        <div className="box">
          <img src={image4} alt="" />
          <div>
            <h3>Tommorowland Music</h3>
            <p>Created by Tommorowland</p>
            <p>170 songs, 7hr</p>
          </div>
        </div>
        <div className="box">
          <img src={image3} alt="" />
          <div>
            <h3>LoFi Hip Hop Music</h3>
            <p>Created by Tommorowlnd</p>
            <p>140 songs, 8hr 19min</p>
          </div>
        </div>
        <div className="box">
          <img src={image1} alt="" />
          <div>
            <h3>Cat Music</h3>
            <p>Created by Cat Music</p>
            <p>170 songs, 7hr</p>
          </div>
        </div>
        <div className="box">
          <img src={image6} alt="" />
          <div>
            <h3>Chill Out</h3>
            <p>Chill Out</p>
            <p>100 songs, 7hr</p>
          </div>
        </div>
        <div className="box">
          <img src={image2} alt="" />
          <div>
            <h3>Deep Haus Music</h3>
            <p>Created by Deep Haus Music</p>
            <p>200 songs, 10hr 40min</p>
          </div>
        </div>
        <div className="box">
          <img src={image5} alt="" />
          <div>
            <h3>Trans Music</h3>
            <p>Created by Trans Music</p>
            <p>300 songs, 30hr</p>
          </div>
        </div>
      </div>

  
    </div>
  );
}
