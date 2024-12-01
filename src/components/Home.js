import React, { Component } from 'react';
import Connection from './Connection';

export default class Body extends Component {
  state = {
    number_count : 0, 
    x : 10,
  }

  count_callback = () => {
    this.setState({number_count : this.state.number_count+1} )
  }

  button_callback = () => {
    console.log("Hello World");
  }

  button_callback2 = (A) => {
    console.log("Hello "+ A);
  }
  

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <Connection />
        <button className='btn btn-primary' onClick={() => this.button_callback2("Somkiat")}>Send</button> {' '}
        <button className='btn btn-secondary' onClick={ () => this.button_callback()} >Click  </button> {' '}
        <button className='btn btn-info' onClick={() => this.count_callback()}>Count</button>
        <h1>{this.state.number_count}</h1>
      </div>
    )
  }
}
