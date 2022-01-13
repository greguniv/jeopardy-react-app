import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    baseURL: 'http://jservice.io/api/random',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({

    }, () => {
      fetch(this.state.baseURL)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    })
  }

  render() {
    return (
      <div id="container">
        <h1>Welcome to Trivia!</h1>
        <h2>Score: </h2>
        <div>
          <h3>Category: </h3>
          <h4>Points: </h4>
        </div>

        <div id="answer">
          <h5>Answer: </h5>
        </div>

        <button type="submit">What is...?</button>
      </div> /* closes container */
    );
  }
}

export default App;
