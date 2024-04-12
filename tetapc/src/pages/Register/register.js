import { useEffect, useState } from 'react';
import './register.css'
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { current, signup } from '../../JS/ACTIONS/actions';
function Register() {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
    const[user,setUser]=useState()
    const userval=useSelector(state=>state.user.user)
    useEffect(()=>{
      if (userval!=null) {
          Navigate("/")
      }
  },[userval])
    const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
   const  handleClick=async()=>{
      await dispatch(signup(user))
     
     
   }
   
  return (
    <div id="Container">
    <div className="elements-holder">
        <label>Name:</label>
        <input type="text" className="text" placeholder="Name" name="name" onChange={(e)=>handlechange(e)}/> 
    </div>
    <div className="elements-holder">
        <label>lastName:</label>
        <input type="text" className="text" placeholder="lastName" name="lastName" onChange={(e)=>handlechange(e)} /> 
    </div>
    <div className="elements-holder">
        <label>Email:</label>
        <input type="email" className="text" placeholder="example@gmail.com" name="email"  onChange={(e)=>handlechange(e)}/> 
    </div>
    <div className="elements-holder">
        <label>password:</label>
        <input type="password" className="text" placeholder="password" name ="password" onChange={(e)=>handlechange(e)}/> 
    </div>
    <div className="elements-holder">
        <label>Date:</label>
        <input type="date" className="text" name="Birth" onChange={(e)=>handlechange(e)} /> 
    </div>
    <div className="elements-holder">
        <label>phone number:</label>
        <input type="text" className="text" placeholder="(+216)" name="phone"  onChange={(e)=>handlechange(e)}/> 
    </div>
    
    <button onClick={handleClick}>register</button>
</div>
  );
}

export default Register;