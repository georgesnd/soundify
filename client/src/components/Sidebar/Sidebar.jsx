import React from 'react';
import './Sidebar.css';
import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsFileMusic } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";
// import img from './components/Assets/logo.png';


function Sidebar() {
    // const({})
  return (
    <div className="sidebar">
      {/* <img
        className="sidebarLogo"
        src={img}
        alt="Soundify logo"
      /> */}
        <div className='sidebarMenu'>
            <div><BiHome  className="sidebarIcon"/>Home</div>
            <div><BiSearch  className="sidebarIcon"/>Search</div>
            <div><BsFileMusic  className="sidebarIcon"/> Music Library</div>
            
            <strong className="sidebarTitle"><BsMusicNoteList className="sidebarIcon"/> Playlist</strong>
      </div>
      
    </div>
  );
}

export default Sidebar