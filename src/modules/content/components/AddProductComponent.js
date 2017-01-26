import React from 'react';
import Button from 'react-bootstrap/lib/Button';

function AddProductComponent(props){
  return <Button onClick={props.openForm}>Add Product</Button>
}

export default AddProductComponent;
