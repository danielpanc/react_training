import React, { Component } from 'react';
import PrdGenerator from '../../../PrdGenerator';
import CartComponent from '../components/CartComponent';

class CartContainer extends Component{

  constructor(){
    super();
  }

  render(){
    return(
      <CartComponent items={this.props.items} removeProduct={this.props.removeFromCart} cartValue={this.props.cartValue}/>
    )
  }
}


export default CartContainer;
