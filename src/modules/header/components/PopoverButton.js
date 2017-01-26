import React, { Component } from 'react';
import CustomPopover from './CustomPopover';
import Overlay from 'react-bootstrap/lib/Overlay';
import ReactDOM from 'react-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class PopoverButton extends Component{
  constructor(){
    super();
    this.toggleHeaderPopover = this.toggleHeaderPopover.bind(this);
    this.state = {
        show: false,
    }
  }
  toggleHeaderPopover() {
    console.log("toggle");
    this.setState({show: !this.state.show});
  }
  render() {
    return (
      <div>
        <div
          ref="target"
          onMouseEnter={this.toggleHeaderPopover}
        >
          <Glyphicon glyph={this.props.icon} style={{...this.props.style, marginRight: 10 + "px", fontSize: 20 + 'px'}}/>
          <span>{this.props.label}</span>
          <Glyphicon glyph="menu-down" style={{...this.props.style, marginLeft: 10 + 'px'}}/>
        </div>
        <Overlay
          show={this.state.show}
          container={this}
          target={() => ReactDOM.findDOMNode(this.refs.target)}
        >
            <CustomPopover toggle={this.toggleHeaderPopover}>{this.props.children}</CustomPopover>
        </Overlay>
      </div>
    );
  }
}

export default PopoverButton;
