import React, { Component } from 'react';

class CustomPopover extends Component{
  render() { 
    return (
      <div
        style={{
          ...this.props.style,
          position: 'absolute',
          backgroundColor: '#EEE',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          border: '1px solid #CCC',
          borderRadius: 3,
          left: 0,
          top: 45,
          padding: 10,
          zIndex: 1,
        }}
        onMouseLeave={this.props.toggle}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default CustomPopover;
