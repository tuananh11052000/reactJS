import React, { useState } from "react";
import { connect } from "react-redux";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from "reactstrap";
import { Link } from 'react-router-dom'

import CrossTech from "../CrossTech";
import "./style.css";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const roleUser = () => {
        if (props.currentUser.role === 'admin') {
            return (
                <NavItem>
                    <Link to="/AddProduct/" className="nav-link">ADD PRODUCT</Link>
                </NavItem>
            )
        }
    }
    return (
        <div className="Wrap-Header">
            <CrossTech />
            <Navbar color="color" light expand="md" className="Navbar_">
                <NavbarBrand href="/" className="CT">CrossTech</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/ListProduct/" className="nav-link ShowPr">SHOW LIST PRODUCT</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Cart/" className="Cart-Header">CART</Link>
                        </NavItem>
                        {roleUser()}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default connect(function (state) {
    return { currentUser: state.currentUser }
})(Header);