import React, { Component } from 'react';


class MyComponent extends Component {
    componentWillMount(){
        console.log('WILL MOUNT');
    }

    componentDidMount() {
        console.log('DID MOUNT')
    }

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

export default MyComponent;