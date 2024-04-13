import React, { useEffect } from 'react';
import './Card.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch } from "react-redux";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { delete_product } from '../../../JS/ACTIONS/productActions';

const Card=(props)=> {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const user=useSelector(state=>state.user.user)
  const handleClick=()=>{
      Navigate(`/productData/${props.product._id}`)
}

  return (
    <div className="card" style={{margin:'50px'}} >
      {<div className="card-image" onClick={()=>handleClick()}><img src={props.product.photo} alt={props.product.name} /></div>}
      <div className="card-content">
        <h2 className="card-title">{props.product.name}</h2>
        { <p className="card-subtitle">Prix:{props.product.price}</p>}
        {<div><div><button className="card-button"  style={(user && user.prefileges === "Admin")?{display:"none"}:{display:"flex"}}>Add</button></div><div style={(user && user.prefileges === "Admin")?{display:"flex",paddingBottom:"10px",justifyContent:"space-around",alignItems:"center"}:{display:"none"}}><FontAwesomeIcon icon={faTrash} onClick={()=>{dispatch(delete_product(props.product._id))}} /><Link  style={{ textDecoration: "none", color: "black", display: "flex" }} to={`/editproduct/${props.product._id}`}><FontAwesomeIcon icon={faPen} /></Link></div></div>}
      </div>
    </div>
  );
}

export default Card;