import { useEffect, useState } from 'react';
import './EditP.css'
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import {  } from '../../JS/ACTIONS/actions';
import { modify } from '../../JS/ACTIONS/productActions';
import { toast } from 'react-toastify';
function EditP() {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
    const[product,setProduct]=useState()
    const userval=useSelector(state=>state.user.user)
    const _id=useParams()
    const [price,setPrice]=useState()
    useEffect(()=>{
      if ((userval && userval.prefileges !== "Admin")) {
          Navigate("/")
      }

  },[userval])

    const handlechange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
   const  handleClick=async()=>{
    setPrice(product.price)
      await dispatch(modify(price,_id))
      toast("product updated")
   }
   
  return (
    <div id="Container">
    
    <div className="elements-holder">
        <label>Price:</label>
        <input type="text" className="text" placeholder="enter the price en TND" name="price"  onChange={(e)=>handlechange(e)}/> 
    </div>
    
    <button onClick={handleClick}>Update</button>
</div>
  );
}

export default EditP;