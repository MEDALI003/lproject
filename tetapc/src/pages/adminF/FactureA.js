import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'

const FactureA = () => {
    const dispatch=useDispatch()
    const basket=useSelector(state=>state.basket.basket)
    
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column"}}>
            {basket?.map(el=><div> <div><p></p>   </div> </div>)}
        </div>
    </div>
  )
}

export default FactureA