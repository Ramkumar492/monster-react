import React from "react";
import "./SearchBox.styles.css"

export  const Search = (props) => {
   return(
    <input 
    onChange ={props.onchange}
    className="search" 
    type="search" 
    placeholder={props.placeholder}
/>
   )
    
}