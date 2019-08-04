import React from "react";
import PropTypes from "prop-types";
// var lastFill;


const Bar = (props) =>{
  return(
    <div className={"outer-bar"}>
      <div className={"inner-bar"} style={{width: props.fillValue + "%"}}></div>
    </div>
  );
}

Bar.prototypes = {
  fillValue : PropTypes.number
}

export default Bar;

