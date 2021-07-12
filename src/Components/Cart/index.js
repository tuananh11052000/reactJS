import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Link } from 'react-router-dom'
import "./style-cart.css";

function Cart(props) {
    // use useEffic to request data from api server
    let data = []
    useEffect(() => {
        const getData = async () => {
            let temp = await axios({
                method: 'get',
                url: 'https://crosstech2020-e8043.firebaseio.com/cart.json/'
            })
            for (let i in temp.data) {
                data.push(temp.data[i])
            }
            if (temp.data !== props.Cart) {
                var { dispatch } = props;
                dispatch({ type: 'SHOW_CART', value: data });
            }
        }
        getData()
        return () => { console.log("good bye") }
    }, []);

    return (
        <Link className="wrap-cart-quantity" to="/Cart">
            <div className="wrap-quantity">
                <p className="quantity">{props.Cart.length}</p>
            </div>
            <FontAwesomeIcon icon={faCartPlus} className="icon-cart"></FontAwesomeIcon>
        </Link>
    )
}

export default connect(function (state) {
    return { Cart: state.Cart, currentUser: state.currentUser }
})(Cart);
