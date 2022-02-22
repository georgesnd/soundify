import React from "react";
import '../login/Login.css';

export default function Login(props){
  
    
    return (props.onClick) ? (
        <div className='loginContainer'>
            <div className='insidePopup'>
            <button onClick={()=> props.setonClick(false)} className='closeButton'>X</button>
            {props.children}
            </div>
            
        </div>
    ) : '';
        
    
        
        
    
}