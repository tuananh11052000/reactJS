import React from 'react'

import FormInput from "./Form";
import Success from "./Success";
import { connect } from "react-redux"
import Header from '../../Components/Header'
import "./style.css";

function AddProduct(props) {
    if (props.isSuccess === false)
        return (
            <div>
                <div className="wrap-cart-header">
                    <Header />
                </div>
                <div className="wrap-forminput">
                    <FormInput />
                </div>
            </div>
        )
    else
        return (
            <div>
                <div className="wrap-cart-header">
                    <Header />
                </div>
                <div className="wrap-forminput">
                    <Success />
                </div>
            </div>
        )
}

export default connect(function (state) {
    return { isSuccess: state.isSuccess }
})(AddProduct)