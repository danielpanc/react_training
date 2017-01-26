import React, { Component, PropTypes } from 'react';
import { Match, Redirect } from 'react-router';

import ContentComponent from '../components/ContentComponent';
import ProductComponent from '../components/ProductComponent';
// import { getProducts } from '../stores/contentStore';
import AddProductContainer from './AddProductContainer';
import ViewProductContainer from '../containers/ViewProductContainer';
import PrdGenerator from '../../../PrdGenerator';
import CartContainer from './CartContainer';

const propTypes = {
  products: PropTypes.array.isRequired,
  // dispatchGetProducts: PropTypes.func,
};

const defaultProps = {
  products: [],
};

class ContentContainer extends Component {
  constructor(){
    super();
    this.updateList = this.updateList.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.getPrdById = this.getPrdById.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      products: [],
      product: {},
      productsPerPage: 6,
      pages: 0,
      page: 1,
      cart: [],
      cartValue: 0,
    }
  }

  shouldComponentUpdate(nextProps) {
    // console.log(nextProps);
    return true;
  }

  componentWillMount() {
    // this.props.dispatchGetProducts();
    console.log("comp will mount");
    this.updateList();
  }

  updateList(page = this.state.page) {
    PrdGenerator.get((products, totalProducts)=>{
      let pages = Math.ceil(totalProducts/this.state.productsPerPage);
      this.setState({products, pages});
      let nextPage = (page>pages) ? page=pages : page;
      this.setState({page: nextPage});
    }, this.state.productsPerPage, page);

  }

  pageChange(page) {
    this.updateList(page);
  }

  getPrdById(id){
    const product = this.state.products.find((prd) => (prd.id === parseInt(id)));
    return product;
  }

  addToCart(id){
    const product = this.getPrdById(id);
    const newProduct = Object.assign({}, product);
    const products =this.state.cart.concat(newProduct);
    let sum = 0;
    products.forEach((item) => {sum += parseInt(item.price)});
    this.setState({cart: products, cartValue: sum});
  }

  removeFromCart(id){
    const products = this.state.cart.filter((v) => {return v.id !== parseInt(id)});
    let sum = 0;
    products.forEach((item) => {sum += parseInt(item.price)});
    this.setState({cart: products, cartValue: sum});
  }


  render() {
    const {
      product,
      cart,
    }  = this.state;
    const cartValue = cart.forEach((item) => {sum += parseInt(item.price)});
    return (
      <div>
        <Match exactly pattern={`/myCart`} render={
          () => (
            <CartContainer items={this.state.cart} removeFromCart={this.removeFromCart} cartValue={this.state.cartValue}/>
          )
        } />
        <Match exactly pattern={`/products`} render={
          ({ pathname }) => (
            <div>
              <ContentComponent
                items={this.state.products}
                Tile={ProductComponent}
                viewItem={this.viewProduct}
                pageChange={this.pageChange}
                pages={this.state.pages}
                activePage={this.state.page}
                pathname={pathname}
                addToCart={this.addToCart}
                 cartValue={this.state.cartValue}
              />
              <AddProductContainer updateList={this.updateList} />
            </div>
          )
        } />
        <Match pattern={`/products/:productId`} render={
          ({ pathname, params }) => (
            <ViewProductContainer
              product={product}
              updateList={this.updateList}
              pathname={pathname}
              params={params}
              addToCart={this.addToCart}
            />
          )
        } />
      </div>
    );
  }
}

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

// const mapStateToProps = (state) => ({
//   products: state.content.products,
// });

// const mapDispatchToProps = {
//   dispatchGetProducts: getProducts,
// };

export default ContentContainer;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ContentContainer);
