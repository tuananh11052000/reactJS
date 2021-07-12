import React from "react";
import { $ } from "jquery"

import BlockIcon from "./BlockIcon";
import Logo from "./Logo";
import Cart from "../Cart"
import "./style.css"

function CrossTech() {
    return (
        <div className="wrap-all">
            <div className="wrap">
                <div className="wrap-BlockIcon">
                    <BlockIcon />
                </div>
                <div className="wrap-logo">
                    <Logo />
                </div>
                <div className="wrap-Cart">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default CrossTech;