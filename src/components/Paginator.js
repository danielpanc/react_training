import React, { Component } from 'react';
import Pagination from 'react-bootstrap/lib/Pagination';

class Paginator extends Component{
  constructor(){
    super();
    this.handleSelect = this.handleSelect.bind(this);
    // this.state ={
    //     activePage: 1
    // }
  }

  handleSelect(e){
    this.setState({
      activePage: e
    });
    this.props.pageChange(e);
  }

  render(){
    console.log(" --- activePage = " + this.props.activePage);
    return(
      <Pagination
        className={this.props.className}
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={this.props.items}
        maxButtons={5}
        activePage={this.props.activePage}
        onSelect={this.handleSelect}
      />
    )
  }
}

export default Paginator;
