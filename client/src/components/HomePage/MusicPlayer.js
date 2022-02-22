import React from 'react'
import "../HomePage/styles/MusicPlayer.css"
import {
    FaRegHeart,
    FaHeart,
    FaForward,
    FaStepForward,
    FaStepBackward,
    FaBackward,
    FaPlay,
    FaPause,
    FaShareAlt,
  } from "react-icons/fa";
import { useState } from 'react';

export default function MusicPlayer({song,imgSrc}) {

    const [isLove, setLove] = useState(false)
    const[isPlaying, setPlaying] = useState(false)

    const changedLoved =()=>{
        setLove(!isLove)

    }

    const changePlayPause =() => {
        setPlaying(!isPlaying)
    }


  return (
    <div className='musicPlayer'>
        <div className="songImage"></div>
        <div className="songAttributes">

        <audio src={song} preload='metada' />
        <div className="top">
            <div className="left">
                <div className="loved" onClick={changedLoved}>
                {isLove? <FaHeart className='icons'/> :  < FaRegHeart className='icons'/>}

                </div>
               

            </div>
            <div className="middle">
                <div className="back">
                    <FaStepBackward className='icons'/>
                    <FaBackward className='icons'/>
                </div>
                <div className="playPause" onClick={changePlayPause}>
                    {isPlaying? <FaPause className='icons'/>: <FaPlay lassName='icons' /> }

                </div>
                <div className="forward">
                    <FaForward className='icons'/>
                    <FaStepForward className='icons'/>
                </div>
            </div>
            <div className="right"></div>
        </div>
        <div className="bottom"></div>
        </div>



    </div>
  )
}
