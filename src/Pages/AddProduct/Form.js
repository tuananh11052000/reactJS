import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import { connect } from "react-redux";

import "./style.css";
const FormInput = (props) => {
    //when you press enter, that page don't reload
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const Submit = async () => {
        let name = document.getElementById("Name_Product").value;
        let unit = document.getElementById("Unit").value;
        let quantity = document.getElementById("Quantity").value;
        let price = document.getElementById("Price").value;
        let link = document.getElementById("Link-Image").value;
        let description = document.getElementById("Description").value;
        axios({
            method: 'POST',
            url: 'https://crosstech2020-e8043.firebaseio.com/product.json',
            data: {
                name: name,
                price: price,
                unit: unit,
                quantity: quantity,
                image: link,
                description: description
            }
        })
        var { dispatch } = props;
        dispatch({ type: 'SUCCESS' });
    }
    return (
        <div className="Wrap_form">
            <Form onSubmit={handleSubmit} className="myForm">
                <FormGroup>
                    <Label for="exampleEmail" className="name-edit">Name Product</Label>
                    <Input type="text" id="Name_Product" placeholder="Input name" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword" className="name-edit">Unit</Label>
                    <Input type="text" id="Unit" placeholder="Input unit" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword " className="name-edit">Quantity</Label>
                    <Input type="text" id="Quantity" placeholder="Input quantity" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword" className="name-edit">Price</Label>
                    <Input type="text" id="Price" placeholder="Input price" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText" className="name-edit">Link image</Label>
                    <Input type="textarea" name="text" id="Link-Image" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText" className="name-edit">Description</Label>
                    <Input type="textarea" name="text" id="Description" />
                </FormGroup>
            </Form>
            <Button color="success" onClick={Submit}>Submit</Button>
        </div>
    );
}

export default connect(function (state) {
    return {}
})(FormInput);