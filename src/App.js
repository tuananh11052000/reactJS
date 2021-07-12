import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ListProduct from "./Pages/ShowProduct/index.js";
import AddProduct from "./Pages/AddProduct/index.js";
import CartPage from "./Pages/Cart"
import Detail from "./Pages/Detail/index"
import PageLogin from './Pages/Login'
import pay from "./Pages/pay"
import "./App.css"

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={PageLogin} />
        <Route path="/ListProduct/" exact component={ListProduct} />
        <Route path="/AddProduct/" exact component={AddProduct} />
        <Route path="/Cart/" exact component={CartPage} />
        <Route path="/Detail/:id" exact component={Detail} />
        <Route path="/pay/" exact component={pay} />
      </div>
    </Router>
  );
}
