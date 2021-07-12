import React, { useEffect } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import "./style.css";
import FormEdit from '../FormEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';


function GetData(props) {
  const { dispatch } = props;
  let data = [];
  useEffect(() => {
    const getData = async () => {
      let temp = await axios({
        method: 'get',
        url: 'https://crosstech2020-e8043.firebaseio.com/product.json'
      })
      console.log(temp.data)
      for (let n in temp.data) {
        if (temp.data[n] !== null)
          data.push({ ...temp.data[n], id: n })
      }
      dispatch({ type: 'SHOW_PRODUCT', list: data });
    }
    getData()
    return () => { console.log("good bye") }
  }, []);
  //Loc du lieu theo yeu cau:
  const dataShow = [];
  for (let i = 0; i < props.Products.length; i++) {
    if (props.checkBox[1] === true || props.checkBox[2] === true || props.checkBox[3] === true || props.checkBox[4] === true) {
      if (props.checkBox[1] === true) {
        if (props.Products[i].type === 1) {
          dataShow.push(props.Products[i])
        }
      }
      if (props.checkBox[2] === true) {
        if (props.Products[i].type === 2) {
          dataShow.push(props.Products[i])
        }
      }
      if (props.checkBox[3] === true) {
        if (props.Products[i].type === 3) {
          dataShow.push(props.Products[i])
        }
      }
      if (props.checkBox[4] === true) {
        if (props.Products[i].type === 4) {
          dataShow.push(props.Products[i])
        }
      }
    }
    else {
      dataShow.push(props.Products[i])
    }
  }

  // function add product to cart when you click Button
  const addToCart = async (pr) => {
    await axios({
      method: "post",
      url: "https://crosstech2020-e8043.firebaseio.com/cart.json/",
      data: {
        id_seller: pr.id_seller,
        name: pr.name,
        unit: pr.unit,
        quantity: pr.quantity,
        price: pr.price,
        image: pr.image,
        quantitybuy: 1
      }
    })
    if (Number(pr.quantity) > 1) {
      await axios({
        method: "patch",
        url: "https://crosstech2020-e8043.firebaseio.com/product/" + pr.id + ".json",
        data: {
          quantity: Number(pr.quantity) - 1
        }
      });
      dispatch({ type: 'DECREASED_PRODUCT', id: pr.id });
    }
    else {
      await axios({
        method: "delete",
        url: "https://crosstech2020-e8043.firebaseio.com/product/" + pr.id + ".json"
      })
      dispatch({ type: 'REMOVE_PRODUCT', id: pr.id })
    }
    dispatch({ type: 'ADD_CART', value: pr })
  }

  //function delete product
  const actionDelete = (pr) => {
    dispatch({ type: "REMOVE_PRODUCT", id: pr.id });
    const deletePrInServer = async (pr) => {
      const url = "https://crosstech2020-e8043.firebaseio.com/product/" + String(pr.id) + ".json";
      await axios({
        method: "delete",
        url: url
      })
    }
    deletePrInServer(pr);
  }

  // Render icon edit product if you are admin
  const renderButtonEdit = (i) => {
    if (props.currentUser.role === 'admin') {
      return (
        <Button className="button-edit" color="info" onClick={() => openForm(i)} >EDIT</Button>
      )
    }
  }

  const renderButtonDel = (pr) => {
    if (props.currentUser.role === 'admin') {
      return (
        <Button className="button-del" color="danger" onClick={() => actionDelete(pr)}>DEL</Button>
      )
    }
  }
  // bat su kien checkbox
  const onDoUongChange = (e) => {
    dispatch({ type: "ADD_TYPE", index: 1 })
  }
  const onBanhMyChange = (e) => {
    dispatch({ type: "ADD_TYPE", index: 2 })
  }
  const onComChange = (e) => {
    dispatch({ type: "ADD_TYPE", index: 3 })
  }
  const onBanhKeoChange = (e) => {
    dispatch({ type: "ADD_TYPE", index: 4 })
  }
  //open form
  const openForm = (i) => {
    dispatch({ type: "OPEN", index: i })
  }
  //reder form
  const renderForm = () => {
    if (props.isOpen === true) {
      return (<FormEdit />)
    }
  }
  return (
    <div>
      <div className="wrap-body">
        <div className="wrap-selection">
          <div className="Loai-San-Pham">Loai san pham:</div>
          <div className="box-type">
            <div className="type">
              <input type="checkbox" className="box" id="do_uong" onChange={onDoUongChange} />
              <div className="title">Đồ uống</div>
            </div>
            <div className="type">
              <input type="checkbox" className="box" id="banh_my" onChange={onBanhMyChange} />
              <div className="title">Bánh mỳ</div>
            </div>
            <div className="type">
              <input type="checkbox" className="box" id="com" onChange={onComChange} />
              <div className="title">Cơm</div>
            </div>
            <div className="type">
              <input type="checkbox" className="box" id="banh_keo" onChange={onBanhKeoChange} />
              <div className="title">Bánh kẹo</div>
            </div>
          </div>
        </div>
        <div className="body-getdata">
          {dataShow.map((pr, i) => (
            <div className="Item">
              {renderForm()}
              <div className="wrap-Image" onClick={() => addToCart(pr)} style={{ backgroundImage: `url('${pr.image}')` }}>
                <div className="back-ground">
                  <FontAwesomeIcon icon={faCartArrowDown} className="icon-addToCart" />
                </div>
              </div>
              <div className="wrap-content">
                <h3 className="name">{pr.name}</h3>
                <div className="info">price: {pr.price} đ</div>
                <div className="info">quantity: {pr.quantity} {pr.unit}</div>
                {renderButtonEdit(i)}
                {renderButtonDel(pr)}
              </div>
            </div>
          ))}
          <FormEdit />
        </div>
      </div>
    </div>
  );
}
export default connect(function (state) {
  return { Cart: state.Cart, Products: state.Products, currentUser: state.currentUser, isOpen: state.isOpen, checkBox: state.checkBox }
})(GetData);