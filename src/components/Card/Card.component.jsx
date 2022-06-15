import React from "react";
import "./Card.styles.css"

export const Card= (props)=>{

       return(
        <div className="card-container">
            <img src= {`https://robohash.org/${props.pokemon.id}?set=set2&size=150x150 `} alt="Monster"/>
            <h1>{props.pokemon.name}</h1>
            <h2>{props.pokemon.email}</h2>
        </div>
        
       )
} 