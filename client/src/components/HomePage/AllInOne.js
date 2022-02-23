import React from 'react'
import LeftMenu from './LeftMenu'
import RightMenu from "./RightMenu"
import MainContainer from "./MainContainer"
import "./AllInOne.css"

export default function AllInOne() {
  return (
    <div className='.allInOne'>
        <LeftMenu />
        <MainContainer />
        <RightMenu />
        
   
        <div className='background'></div>


    </div>
  )
}
