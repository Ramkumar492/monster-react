
import React from "react";
import "./Card-List.styles.css";
import { Card } from "../Card/Card.component";

export const CardList = (props)=>{

    return(
        <div className="card-list">
          {
            props.pokemons.map((pokemon,i)=>{
           
           return   <Card key ={i} pokemon={pokemon} />
            
          })
          }
           
      
        </div>
    )

}