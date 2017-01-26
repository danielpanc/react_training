import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';



function AddToCartButton(props){
  return(
    <Button onClick={props.onClick} bsStyle="primary">
      <Glyphicon glyph="shopping-cart" style={{marginRight: 10 +"px"}}/>
      Adauga in Cos
    </Button>
  )
}

export default AddToCartButton;
