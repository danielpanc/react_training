import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import {createStore} from 'redux';

const count = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}


const store = createStore(count);

console.log(store.getState());

store.subscribe(() => {

})

store.dispatch({type: 'INCREMENT'});

console.log(store.getState());

class Counter extends Component{
  render(){
    return(
      <Button>push me </Button>
    )
  }
}

export default Counter;









// Class InAfara
//
// f(t){
//   t.
// }
//
// render(
//   <Component cbk = {f}
// )
//
// class Componentn {
//   onClickCeva(e) {
//     this.props.cbk(e, this.state.)
//   }
//   return <div onClcik={this.onClickCeva}>
// }
