import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'App title'
    };
    
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(event) {
    this.setState({
      title: 'New App title'
    });
  }

  onSubmit(event){
    event.preventDefault();
    alert(this.input.value);
  }

  onChange(event){
    console.log(event.target.value);
  }
  render() { 
    return ( 
      <div>
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here</div>
        <MyComponent 
          title="This is the component title"
          name="bradley"
          onClick={this.onClick}
        />
      </div>
    );
  }
}
 
export default App;
