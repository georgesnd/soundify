import React from 'react'
import { useEffect } from 'react'
import MenuList from './MenuList'
import "./menuList.css"

export default function Menu({menuObject}) {


  return (
    <div className='menuContainer'>
       <h5>Menu</h5>
       <ul>
           {
               menuObject && menuObject.map((menu) => (
                   <li key={menu.id}><a href="#"><i>{menu.icon}</i>
                   <span>{menu.name}</span>
                   </a></li>
               ))
           }
       </ul>
    </div>
  )
}

