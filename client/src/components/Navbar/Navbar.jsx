import React from 'react';
import './Navbar.css';





function Navbar() {
  return (
    <div className="navbarHeader">
    <div className="headerLeft">
     
      <input className='navbarPlaceholder' placeholder="Search for Artists, Songs, or Albums" type="text" />
    </div>
    <div className="headerLight">
      
    </div>
  </div>
  )
}

export default Navbar