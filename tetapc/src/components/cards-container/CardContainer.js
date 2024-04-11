import React, { useEffect } from 'react';
import CardB from '../Navbar/Card/Card';
import Spinner from "../Spinner"
const CardContainer = ({product}) => {
  

  return (
    <div>
      <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
        {product ? product.map((el, index) => <CardB  product={el} />) : <Spinner />}   
      </div>

</div>
  );
};

export default CardContainer;
