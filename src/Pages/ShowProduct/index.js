import React from 'react';
import Header from '../../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

import GetData from "./GetData";

function ListProduct() {
  return (
    <div>
      <div className="wrap-cart-header">
        <Header />
      </div>
      <GetData />
      <div className="icon-facebookmess">
        <FontAwesomeIcon icon={faFacebookMessenger} className="icon-facebookmess icon" />
      </div>
    </div>
  );
}
export default ListProduct;
