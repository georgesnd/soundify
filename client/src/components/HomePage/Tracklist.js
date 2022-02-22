import React from 'react'
import "./menuList.css"
import rammstein1 from "../Assets/rammstein.jpg"
import {BsFillVolumeUpFill} from "react-icons/bs"
import {BsMusicNoteList} from "react-icons/bs"
import {HiOutlineDesktopComputer} from "react-icons/hi"

export default function Tracklist() {
  return (
    <div className='tracklist'>
        <div className="top">
            <img src={rammstein1} alt="" />
            <p>Rammstein <span>Artist</span> </p>

        </div>
        <div className="bottom">
            <BsFillVolumeUpFill className='icons'/>
            <input type="range" />
            <BsMusicNoteList className='icons music' />
            <HiOutlineDesktopComputer className='icons'/>

        </div>
    </div>
  )
}
