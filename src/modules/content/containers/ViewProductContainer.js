import React, {Component} from 'react';
import { Redirect } from 'react-router';
import ViewProductComponent from '../components/ViewProductComponent';
import PrdGenerator from '../../../PrdGenerator';
import ConfirmPopup from '../../../components/ConfirmPopup';

class ViewProductContainer extends Component{
  constructor(){
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
    this.openConfirmDeleteProductPopup = this.openConfirmDeleteProductPopup.bind(this);
    this.closeConfirmDeleteProduct = this.closeConfirmDeleteProduct.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      product: {},
      close: false,
      openConfirmDeleteProduct: false,
      confirmDeleteProduct: {
        title: "Delete Product",
        message: "Are you sure you want to delete this product?",
      }
    }
  }

  componentWillMount(){
    const {
      params,
    } = this.props;

    const productId = params.productId;
    PrdGenerator.getById(productId).then((product) => {this.setState({product})});

  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ product: nextProps.product})
  // }

  deleteProduct() {
    PrdGenerator.delete(
      this.state.product.id
    ).then(
      () => {
        this.close();
        this.props.updateList();
      }
    );
  }

  close() {
    console.log("sss");
    this.setState({close: true});
  }

  openConfirmDeleteProductPopup(){
    this.setState({openConfirmDeleteProduct: true});
  }

  closeConfirmDeleteProduct(){
    this.setState({openConfirmDeleteProduct: false});
  }

  render(){
    const {
      openConfirmDeleteProduct,
    } = this.state;

    if (this.state.close) {
      return <Redirect to="/products" />
    }

    return(
        <div>
          {
            openConfirmDeleteProduct
            ?
              <ConfirmPopup
                {...this.state.confirmDeleteProduct}
                close={this.closeConfirmDeleteProduct}
                yesCallBack={this.deleteProduct}
              />
            :
              ""
          }
          <ViewProductComponent
            product={this.state.product}
            close={this.close}
            deleteProduct={this.openConfirmDeleteProductPopup}
            addToCart={this.props.addToCart}
          />
      </div>
    )
  }
}

export default ViewProductContainer;
