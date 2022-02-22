import React from 'react'
import {BsFillHouseFill} from "react-icons/bs"
import {GoRadioTower} from "react-icons/go"
import {FaMicrophoneAlt} from "react-icons/fa"
import {BsJournalAlbum} from "react-icons/bs"
import {MdPodcasts} from "react-icons/md"
import {BsSoundwave} from "react-icons/bs"
import "./menuList.css"



const MenuList = [
    {
        id:1,
        icon: <BsFillHouseFill className='icons'/>,
        name:"Home"
    },
    {
        id:2,
        icon:  <BsSoundwave className='icons'/>,
        name:"Discover"
    },
    {
        id:3,
        icon:  <GoRadioTower className='icons' />,
        name:"Radio"
    },
    {
        id:4,
        icon: <FaMicrophoneAlt className='icons'/>,
        name:"Artist"
    },
    {
        id:5,
        icon: <BsJournalAlbum className='icons'/>,
        name:"Albums"
    },
    {
        id:6,
        icon: <MdPodcasts className='icons'/>,
        name:"Podcasts"
    },
]

export {MenuList}

