import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';

function MyProduct(props){
  const product = props.item;
  const {
    remove
  } = props;
  return(
    <div style={{
      borderBottom: "1px solid gray",
      position: "relative",
      padding: "10px 0",
    }}>
      <div style={{
        display: "inline-block",
        width: "25%",
      }}>
        <img src={product.image} style={{width: 150 + "px", verticalAlign: "inherit"}}/>
      </div>
      <div style={{
        display: "inline-block",
        width: "25%",
      }}>
        <p style={{marginTop: "20px"}}>
          {product.description}
        </p>
      </div>
      <div style={{
        display: "inline-block",
        width: "25%",
        position: "relative",
      }}>
        <p style={{
          color: "red",
          right: 0,
          position: "absolute",
          marginRight: "20px",
        }}>
          {product.price + " Lei"}
        </p>
      </div>
      <div style={{
        display: "inline-block",
        width: "25%",
        position: "relative",
      }}>
        <Button style={{
          marginLeft: "100px",
        }} onClick={(e) => {remove(product.id)}}>
          Renunta la produs
        </Button>
      </div>
    </div>
  )
}


export default MyProduct;
