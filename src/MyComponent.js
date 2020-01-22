import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.string.isRequired
};

class MyComponent extends Component {
    state = {  }
    render() { 

        return ( 
        <div>
            <h1>Title: {this.props.title}</h1> 
            <h2>Name: {this.props.name}</h2>
            <div onClick={this.props.onClick}>Click me</div>
        </div>
        );
    }
}
 
MyComponent.propTypes = propTypes;

export default MyComponent;