import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

const PopUpContent = function(props){
  return(
    <div>
      <br/>
      {(props.topText.length > 0) ? <p>{props.topText}</p> : ""}

      {(props.topText.pathname !== "") ?
        <Link to={`/${props.pathname}`}>
          <Button bsStyle="primary">{props.label}</Button>
        </Link> :
      (props.label.length > 0) ? <Button bsStyle="primary">{props.label}</Button> : "" }



      {(props.bottomText.length > 0) ?
        <p>
        {props.bottomText}
        {(props.linkText.length > 0) ? <a href="#">{props.linkText}</a> : ""}
        </p> :
        ""}

    </div>
  )
}

export default PopUpContent;
