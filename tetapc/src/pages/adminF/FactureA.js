import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getbasket} from '../../JS/ACTIONS/basketActions'
import Navb from "../../components/Navbar/Navb"
const FactureA = () => {
    const dispatch=useDispatch()
    const basket=useSelector(state=>state.basket.basket)
    const fix=0
    useEffect(()=>{
      const getbaskete=async()=>{
        await dispatch(getbasket())
      }
      getbaskete()
    },[fix])
    console.log(basket)
  return (
    <div>
      <Navb />
      <div></div>
        <table>
          <tr> 
            
          </tr>
        </table>
    </div>
  )
}

export default FactureA