import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Facture.css'; // Import du fichier de style CSS
import { get_product } from '../../JS/ACTIONS/productActions';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';

const Facture = () => {
  const Navigate=useNavigate()
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.newbasket);
  const product = useSelector(state => state.product.product);
  const [items, setItems] = useState([]);
  const [style,setStyle]=useState({display:"flex"})
  useEffect(() => {
    if (basket.length === 0 || product.length === 0) {
      Navigate("/")
    } else {
      const updatedItems = basket.map(basketItem => {
        const productItem = product.find(productItem => productItem._id === basketItem.productId);
        return {
          name: productItem.name,
          quantity: basketItem.quantity,
          price: productItem.price
        };
      });
      setItems(updatedItems);
    }
  }, [basket, product, dispatch]);
  const handleClick=async()=>{
    setStyle({display:"none"})
    Navigate('/')
    toast("commande added successfully")
  }
  // Calculer le total de la facture
  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="invoice">
      <h2>Facture pour l'utilisateur </h2>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: {totalAmount}</div>
   <div style={style}><Button onClick={()=>handleClick()} >validate</Button><Button onClick={()=>Navigate("/")}></Button></div>   
    </div>
  );
};

export default Facture;
