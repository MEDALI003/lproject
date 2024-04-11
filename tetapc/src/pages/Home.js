import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from '../JS/ACTIONS/actions';
import { useNavigate } from "react-router-dom";
import { get_product } from '../JS/ACTIONS/productActions';
import CardB from '../components/Navbar/Card/Card';
import Spinner from "../components/Spinner"
const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  const fix=0
  useEffect(()=>{
    const products=async()=>{
      dispatch(get_product())
    }
    products()
  },[fix])
  const product = useSelector(state => state.product.product);
console.log(product)

  return (
    <div>
{product ? product.map((el, index) => <CardB  product={el} />) : <Spinner />}    
</div>
  );
};

export default Home;
