import React from 'react';
import MyProduct from './MyProduct';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

function CartComponent(props){
  const {
    items,
    removeProduct,
  } = props;

  return(
    <div>
      {
        items.map((item, i) => (
          <MyProduct key={i} item={item} remove={removeProduct}/>
        ))
      }
      {
        (items.length === 0) ? <p>"Nu aveti produse in cos ..."</p> :
         <p>Valoare Totala: <span>{props.cartValue} Lei</span></p>
      }
      <Link to="/products">
        <Button style={{marginTop:"20px"}}>Inapoi la lista de produse</Button>
      </Link>
    </div>
  )
}


export default CartComponent;
