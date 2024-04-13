import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from '../../components/cards-container/CardContainer';
import FooterB from '../../components/Footer/Footer';
import { current } from '../../JS/ACTIONS/actions';
import { get_product } from '../../JS/ACTIONS/productActions';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const product = useSelector(state => state.product.product);
 useEffect(()=>{
 const test=async()=>{ 
  if (!user) {
    await dispatch(current())
  }
  dispatch(get_product())}
  test()
 },[user]) 
 
  return (
    <div>
      {product?<CardContainer product={product}/>:null}
      <FooterB />
    </div>
  );
};

export default Home;
