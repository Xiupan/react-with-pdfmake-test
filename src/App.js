import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

let docDefinition = { content: 'This is an sample PDF printed with pdfMake' };

class App extends Component {
  render() {
    // Opens the generated PDF in a new window on App load!
    // pdfMake.createPdf(docDefinition).open();

    // Downloads the generated PDF as a .pdf file on App load!
    // pdfMake.createPdf(docDefinition).download();
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
