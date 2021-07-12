import React, { useEffect } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import "./style.css";
import { Media, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function GetData(props) {
  //use useEffic to request data from api server
  useEffect(() => {
    let data_cart = [];
    const getData = async () => {
      let temp = await axios({
        method: 'get',
        url: 'https://crosstech2020-e8043.firebaseio.com/cart.json/'
      })
      for (let i in temp.data) {
        data_cart.push({ ...temp.data[i], id: i })
      }
      var { dispatch } = props;
      dispatch({ type: 'GET_DATA', value: data_cart });
    }
    getData()
    return () => { console.log("good bye") }
  }, []);
  console.log(props)
  //Action for delete icon
  const deleteProduct = async (id, index) => {
    const url = "https://crosstech2020-e8043.firebaseio.com/cart/" + String(id) + ".json";
    await axios({
      method: "delete",
      url: url
    })
    const { dispatch } = props;
    console.log(index)
    dispatch({ type: 'DELETE_CART', index: index })
  }
  //Action for icon plus
  const Plus = async (pr, index) => {
    const { dispatch } = props;
    alert(`Bạn đã mua thêm 1 sản phẩm ${pr.name} số sản phẩm bạn có là ${pr.quantitybuy + 1}`);
    dispatch({ type: 'PLUS', index: index })
  }
  //Action for icon reduce
  const Reduce = (pr, index, deleteproduct) => {
    const { dispatch } = props;
    alert(`Bạn đã bỏ đi 1 sản phẩm ${pr.name} số sản phẩm còn lại là ${pr.quantitybuy - 1}`);
    dispatch({ type: 'REDUCE', pr: pr, index: index, deleteproduct: deleteproduct })
  }
  return (
    <div className="Getdata">
      {props.Cart.map((pr, i) => (
        <div className="cart-product" key={i}>
          <div className="wrap-image-product">
            <img className="image-product" src={pr.image} />
          </div>
          <div className="infomation-product">
            <div className="wrap-price-info">
              <div className="wrap-info">
                <p className="nono" >NAME PRODUCT: {pr.name}</p>
                <p className="unit">UNIT: {pr.unit}</p>
                <p className="price">PRICE: {pr.price}</p>
                <div className="plus-reduce">
                  <Button className="button-plus-reduce-cart" color="success" onClick={() => Plus(pr, i)}>plus</Button>
                  <Button className="button-plus-reduce-cart reduce" color="warning" onClick={() => Reduce(pr, i, deleteProduct)}>reduce</Button>
                  <Button className="button-plus-reduce-cart reduce" color="danger" onClick={() => deleteProduct(pr.id, i)}>del</Button>
                </div>
              </div>
              <div className="wrap-price">
                PRICE: {pr.price}
                <FontAwesomeIcon icon={faPlusSquare} className="icon-plus icon-cart" onClick={() => Plus(pr, i)}></FontAwesomeIcon>
                <text>{pr.quantitybuy}</text>
                <FontAwesomeIcon icon={faMinusSquare} className="icon-reduce icon-cart" onClick={() => Reduce(pr, i, deleteProduct)}></FontAwesomeIcon>
                <IconButton onClick={() => deleteProduct(pr.id, i)}>
                  <DeleteIcon className="icon-delete" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default connect(function (state) {
  return { Cart: state.Cart, Products: state.Products }
})(GetData); 
