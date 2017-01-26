import React, {Component} from 'react';
import AddProductComponent from '../components/AddProductComponent';
import AddProductModalComponent from '../components/AddProductModalComponent';
// import {addProduct} from '../stores/addProductStore';
import PrdGenerator from '../../../PrdGenerator';


// const propTypes = {
//   dispatchAddProduct: PropTypes.func,
// };


class AddProductContainer extends Component{
  constructor(){
    super();
    this.openForm = this.openForm.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateOption = this.updateOption.bind(this);
    this.updatePrice = this.updatePrice.bind(this);


    this.state = {
      modalOpen: false,
      product:{
        description: "",
        options: "",
        price: 0,
      }
    }
  }

  openForm(){
    this.setState({modalOpen: true});
  }

  closeForm(){
    this.setState({modalOpen: false});
  }

  updateDescription(t){
    this.setState({product:{...this.state.product, description: t.target.value}});
  }

  updateOption(t){
    this.setState({product:{...this.state.product, options: t.target.value}});
  }

  updatePrice(t){
    this.setState({product:{...this.state.product, price: t.target.value}});
  }

  addProduct(){
    PrdGenerator.add(this.state.product).then((prd) => {this.props.updateList();});
    this.closeForm();
  }

  render(){
    let modalOpen = this.state.modalOpen;
    return(
      <div>

        <AddProductComponent
          openForm={this.openForm}
        />
        {(modalOpen)?
          <AddProductModalComponent
            onClose={this.closeForm}
            addProduct={this.addProduct}
            updateDescription={this.updateDescription}
            updateOption={this.updateOption}
            updatePrice={this.updatePrice}
          /> :
          ""
        }
      </div>
    )
  }
}

// AddProductContainer.propTypes = propTypes;

// const mapStateToProps = (state) => ({
// });
//
// const mapDispatchToProps = ({
//   dispatchAddProduct: addProduct,
// });

export default AddProductContainer;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AddProductContainer);
