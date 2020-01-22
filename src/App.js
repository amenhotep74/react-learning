import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  // updates the state then the title is fed back into the input as the value prop
  constructor(props) {
    super(props);

    this.state = {
      title: 'App title'
    };
    
    this.updateTitle = this.updateTitle.bind(this);
  }
  
  updateTitle(event) {
    this.setState({ title: event.target.value });
  }
  
  render() { 
    return ( 
      <div>
        <h1>{this.state.title}</h1>
        <input 
        onChange={this.updateTitle}
        value={this.state.title}
        />

      </div>
    );
  }
}
 
export default App;
