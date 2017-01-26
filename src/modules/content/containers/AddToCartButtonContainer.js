import React, {Component} from 'react';
import AddToCartButton from '../components/AddToCartButton';
import PrdGenerator from '../../../PrdGenerator';


class AddToCartButtonContainer extends Component{
  constructor(){
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(e){
    e.preventDefault();
    e.stopPropagation();
    const productId = this.props.id;
    this.props.add(productId);
  }

  render(){
    return(
      <div>
        <AddToCartButton onClick={this.addToCart}/>
      </div>
    )
  }
}

export default AddToCartButtonContainer;
