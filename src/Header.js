import React from 'react';
import './Header.css';

function Header(props) {
    return (
     <nav className = "header">
          <img 
             className = "header_logo" 
             src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt = ""    
             />
             <h1>{props.name}</h1>
       </nav> 
    )
}

export default Header;
