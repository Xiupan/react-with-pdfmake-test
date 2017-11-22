import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import pdfMake from './pdfmake.min.js';

let docDefinition = { content: 'This is an sample PDF printed with pdfMake' };

class App extends Component {
  render() {
    // pdfMake.createPdf(docDefinition).open();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
