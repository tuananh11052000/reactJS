import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios';
import "./style.css"


const FormEdit = (props) => {
    const { dispatch } = props;
    console.log(props)
    const editProduct = () => {
        let name = document.getElementById("Name_Product").value;
        let unit = document.getElementById("Unit").value;
        let quantity = document.getElementById("Quantity").value;
        let price = document.getElementById("Price").value;
        let link = document.getElementById("Link-Image").value;
        let description = document.getElementById("Description").value;
        let temp = props.Products[Number(props.isOpen.index)];
        console.log(temp)
        if (name !== null && name !== "") {
            temp.name = name;
        }
        if (unit !== null && unit !== "") {
            temp.unit = unit;
        }
        if (quantity !== null && quantity !== " ") {
            temp.quantity = quantity;
        }
        if (price !== null && price !== "") {
            temp.price = price;
        }
        if (link !== null && link !== "") {
            console.log(link)
            temp.image = link;
        }
        if (description !== null && description !== "") {
            temp.description = description;
        }
        dispatch({ type: "EDIT_PRODUCT", index: props.isOpen.index, newProduct: temp })
        const editInServer = async (pr) => {
            await axios({
                method: "patch",
                url: "https://crosstech2020-e8043.firebaseio.com/product/" + pr.id + ".json",
                data: pr
            });
        }
        editInServer(props.Products[props.isOpen.index])
        dispatch({ type: "CLOSE" })
    }
    if (props.isOpen.status === true)
        return (
            <div className="wrap-form-edit">
                <div className="form-edit">
                    <Form className="myForm">
                        <FormGroup>
                            <Input type="text" id="Name_Product" placeholder="Input name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" id="Unit" placeholder="Input unit" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" id="Quantity" placeholder="Input quantity" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" id="Price" placeholder="Input price" />
                        </FormGroup>
                        <FormGroup>
                            <div className="input_1">Link-Image</div>
                            <Input type="textarea" name="text" id="Link-Image" />
                        </FormGroup>
                        <FormGroup>
                            <div className="input_1">Description</div>
                            <Input type="textarea" name="text" id="Description" />
                        </FormGroup>
                    </Form>
                    <div className="wrap-button">
                        <Button color="success" className="button-submit" onClick={() => editProduct()}>Submit</Button>
                        <Button color="warning" onClick={() => dispatch({ type: "CLOSE" })}>Cancel</Button>
                    </div>
                </div>
            </div>
        )
    else {
        return (<div></div>)
    }
}

export default connect(function (state) {
    return { Cart: state.Cart, Products: state.Products, currentUser: state.currentUser, isOpen: state.isOpen }
})(FormEdit);