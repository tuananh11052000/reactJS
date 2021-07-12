import React from 'react';
import Header from '../../Components/Header'
import './style.css'
import GetData from "./Getdata";
import Box_fee from './Box_fee'

function CartPage() {
  return (
    <div>
      <div className="wrap-cart-header">
        <Header />
      </div>
      <div className="wrap-body-cartpage">
        <GetData />
        <Box_fee />
      </div>
    </div>
  );
}
export default CartPage;