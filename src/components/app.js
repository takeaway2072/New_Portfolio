import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Genesis project</h1>
        <div>{moment().format("MMMM do YYYY,h:mm: ss a')</div>
        
      </div>
    );
  }
}
