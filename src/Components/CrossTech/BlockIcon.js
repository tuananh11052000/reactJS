import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

function BlockIcon (){
    return(
        <div className="wrap-BlockIcon">
            <a className = "wrap-icon" href="https://www.facebook.com/profile.php?id=100018425927537">
                <FontAwesomeIcon icon={faFacebookF} className="icon-facebook icon"/>
            </a>
            <a className = "wrap-icon" href="https://www.instagram.com/t.anh11052000/">
                <FontAwesomeIcon icon={faTwitter} className="icon-twitter icon"/>
            </a>
            <a className = "wrap-icon" href="https://twitter.com/?lang=en">
                <FontAwesomeIcon icon={faInstagram} className="icon-instagram icon"/>
            </a>
        </div>
    )
}

export default BlockIcon;