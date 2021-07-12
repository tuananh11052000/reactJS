import React from 'react';
import { Button } from "reactstrap"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/fontawesome-svg-core'
import {connect} from "react-redux";

import "./style.css";
const Success = (props) => {
  const Continue = () => {
    var {dispatch} = props;
    dispatch({type:'CONTINUE'});
  }
  return (
    <div className = "wrap-icon-success">
      <h1 className="success-icon">SUCCESS</h1>
      <FontAwesomeIcon icon={faCheckCircle} />
      <div className = "wrap-button-continue"><Button color="success" onClick = {Continue}>CONTINUE</Button></div>     
    </div>
  );
}

export default connect(function(state){
  return {}
})(Success);