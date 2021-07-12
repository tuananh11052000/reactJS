import { combineReducers } from "redux";
import Products from "./Product";
import isSuccess from "./isSuccess";
import Cart from "./Cart";
import currentUser from "./currentUser"
import isPay from './isPay';
import isOpen from './isOpen'
import checkBox from './checkBox'

var reducer = combineReducers({ Products, isSuccess, Cart, currentUser, isPay, isOpen, checkBox });

export default reducer;