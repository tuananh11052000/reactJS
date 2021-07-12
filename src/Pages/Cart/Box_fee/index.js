import React from 'react';
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import pay from '../../pay';
import { Redirect } from 'react-router';

function Box_fee(props) {
    console.log(props.isPay)
    let sum = 0
    const { dispatch } = props;
    const sum_fee = () => {
        const arr = props.Cart;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i].quantitybuy * Number(arr[i].price);
        }
    }
    sum_fee();

    const orderProduct = () => {
        if (props.isPay === true) {
            dispatch({ type: "PAY" });
            return <Redirect to="/Pay" />
        }
    }
    return (
        <div className="box-fee">
            {orderProduct()}
            <div className="wrap-box-fee">
                <div className="wrap-info-box-fee">
                    <p className="provisional">
                        PROVITIONAL: {sum} đ
                    </p>
                </div>
                <hr />
            </div>
            <div className="wrap-button">
                <Button color="danger" onClick={() => dispatch({ type: "PAY" })}>   Proceed to ordering   </Button>
            </div>
        </div>
    )
}

export default connect(function (state) {
    return { Cart: state.Cart, isPay: state.isPay }
})(Box_fee);
