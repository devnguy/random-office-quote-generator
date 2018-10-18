import React, { Component } from 'react';
import quotes from './quotes';
// import logo from './logo.svg';
import './App.css';


const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleGenerateQuote = this.handleGenerateQuote.bind(this);
    this.state = {
      generatedQuote: quotes[getRandomInt(quotes.length)] 
    };
  };
  handleGenerateQuote() {
    this.setState(() => {
      return {
        generatedQuote: quotes[getRandomInt(quotes.length)] 
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Random Office Quote Generator</h1>
        <div>
          <button onClick={this.handleGenerateQuote}>Generate</button>
        </div>

        <div>
          <QuoteContent generatedQuote={this.state.generatedQuote.quote} character={this.state.generatedQuote.character}/>
        </div>

      </div>
    );
  }
}

const QuoteContent = (props) => (
  <div>
    <p>
      {props.generatedQuote}
    </p>
    <p>
      - {props.character}
    </p>
  </div>

);

export default App;
