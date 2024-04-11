import React from 'react';
import './Card.css';


const Card=(props)=> {

  return (
    <div className="card" style={{margin:'50px'}}>
      {<div className="card-image"><img src={props.product.photo} alt={props.product.name} /></div>}
      <div className="card-content">
        <h2 className="card-title">{props.product.name}</h2>
        { <p className="card-subtitle">Prix:{props.product.price}</p>}
        {<button className="card-button" >Add</button>}
      </div>
    </div>
  );
}

export default Card;