import React from 'react'
import Header from '../../Components/Header'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import "./style.css"

const pay = (props) => {
    let sum = 0
    const { dispatch } = props;
    const sum_fee = () => {
        const arr = props.Cart;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i].quantitybuy * Number(arr[i].price);
        }
    }
    sum_fee();
    const payInvoice = () => {
        if (props.isPay === true) {
            dispatch({ type: "PAY" })
            return (
                <Redirect to="/ListProduct/" />
            )
        }
    }

    const onClickButton = () => {
        dispatch({ type: "PAY" });
        dispatch({ type: 'DELETE_ALL' })
        alert("Bạn đã thanh toán thành công!!! Tiếp tục mua sắm nào.")
    }

    return (
        <p className="wrap-pay-page">
            {payInvoice()}
            <p className="wrap-header">
                <Header />
            </p>
            <p className="myForm">
                <Form >
                    <FormGroup>
                        <Label>Your full name</Label>
                        <Input type="text" id="fullname" placeholder="Input name" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Phone Number</Label>
                        <Input type="text" id="Unit" placeholder="Input phone number" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Location</Label>
                        <Input type="text" id="location" placeholder="Input location" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" id="email" placeholder="Input email" />
                    </FormGroup>
                    <p className="wrap-checkbox">
                        <input type="checkbox" className="checkBox" />
                        <p className="text-checkbox">Bạn chấp nhận thanh toán với số tiền {sum} đ</p>
                    </p>
                </Form>
                <Button onClick={() => onClickButton()}>Thanh Toán</Button>
            </p>
        </p>
    )

}

export default connect(function (state) {
    return { Cart: state.Cart, isPay: state.isPay }
})(pay);