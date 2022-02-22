import React from 'react'
import {FiPlus} from "react-icons/fi"
import "./menuList.css"
import { Playlist } from './Playlist'
import {AiTwotoneDelete} from "react-icons/ai"
import {BsMusicNoteList} from "react-icons/bs"


export default function MenuPlaylist() {
  return (
    <div className='playlistContainer'>
        <div className="nameContainer">
            <h5>Playlist</h5>
            <FiPlus className='icons' />
        </div>
        <div className="playlistScroll">


                 {
                Playlist && Playlist.map((list) => (

                    <div className='playlist' key={list.id}>
                    <BsMusicNoteList className='icons music' />
                    <p>{list.name}</p>
                    <AiTwotoneDelete className='icons trash' />
        
                    </div>

                ))

            }
        
        </div>
    </div>
  )
}
