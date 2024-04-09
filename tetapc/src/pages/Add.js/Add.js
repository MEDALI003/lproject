import { useEffect, useState } from 'react';
import './Add.css'
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addProduct } from '../../JS/ACTIONS/productActions';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import { Cloudinary } from "@cloudinary/url-gen";

function Add() {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
    const[product,setProduct]=useState(null)
    const userval=useSelector(state=>state.user.user)
    const[file,setFile]=useState()
   
    const handlechange=async (e)=>{
        if([e.target.name]!="photo")
        {setProduct({...product,[e.target.name]:e.target.value})}
    
    else{
        setProduct({...product,[e.target.name]:e.target.value})
        await setFile(product.photo)
        phonoMan()
    }
}
    const phonoMan=async()=>{
            const result= await axios.post("http://localhost:8000/api/cloudinary/photo",file)
            console.log(result)
    }
   const  handleClick=async()=>{

      await dispatch(addProduct(product))
      Navigate("/profile")
     
   }
   
  return (
    <div id="Container">
    <div className="elements-holder">
        <label>Name:</label>
        <input type="text" className="text" placeholder="Name" name="name" onChange={(e)=>handlechange(e)}/> 
    </div>
    <div className="elements-holder">
        <label>Description</label>
        <input type="text" className="text" placeholder="lastName" name="description" onChange={(e)=>handlechange(e)} /> 
    </div>
    <div className="elements-holder">
        <label>quantity:</label>
        <input type="Number" className="text" placeholder="quantity" name="quantity"  onChange={(e)=>handlechange(e)}/> 
    </div>
    <div id="elements-holder" className="elements-holder">
  <label>Category:</label>
  <select className="text" name="category" onChange={(e) => handlechange(e)}>
    <option value="">Select category...</option>
    <option value="laptop">Laptop</option>
    <option value="desktop_pc">Desktop PC</option>
    <option value="accessories">Accessories</option>
  </select>
</div>

    <div className="elements-holder">
        <label>photo:</label>
        <input type="file" className="text" name="photo" onChange={(e)=>handlechange(e)} /> 
    </div>
    <div className="elements-holder">
        <label>Price:</label>
        <input type="number" className="text" placeholder="Price(TND)"  name="price"onChange={(e)=>handlechange(e)}/> 
    </div>

    <button onClick={handleClick}>Complete</button>
</div>
  );
}

export default Add;