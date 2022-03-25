import React from "react";
import './Card.css';

function Card(props){
    return(
        <div id="card">
            <img id="image" src={props.image} alt={props.id} />
            <h1>{props.id}</h1>
            
            <h2>{props.name}</h2>
            <h3>{props.weight_kg}</h3>
            <h3>{props.weight_lbs}</h3>
            <h3>{props.year_built}</h3>

        </div>
    )

}

export default Card;