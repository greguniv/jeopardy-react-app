import React, { Component } from 'react';
// CSS
import './App.css';

//Components

class App extends Component {

  state = {
    baseURL: 'http://jservice.io/api/random?',
    question: '',
    answer: '',
    category: '',
    setQuestion: '',
    toggle: false,
    score: 0,
  }

  handleIncrement = e => {
    // console.log('Increment Clicked')
    this.setState({score: this.state.score += this.state.setQuestion.value})
  }

  handleDecrement = e => {
    // console.log('Decrement Clicked')
    this.setState({score: this.state.score -= this.state.setQuestion.value})
  }

  handleReset = e => {
    this.setState({score: this.state.score = 0})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }



  componentDidMount() {
    fetch(this.state.baseURL)
      .then(response => response.json())
      .then(data => this.setState({ setQuestion: data.pop() }))
      .catch(error => console.error(error))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      setQuestion: {
        // toggle: true,
      }

    }, () => {
      fetch(this.state.baseURL)
        .then(response => response.json())
        .then(data => this.setState({ setQuestion: data.pop() }))
        .catch(error => console.error(error))
    })
  }

  render() {

    const { category, answer, question, value } = this.state.setQuestion

    return (
      // console.log('hello'),
      <div id="container">
        <div>
          <h1>Welcome to Trivia!</h1>

          <h2>Score: {this.state.score} </h2>
          <div className="score-button">
            <button id="increase" onClick={this.handleIncrement}>Increase</button>

            <button id="decrease" onClick={this.handleDecrement}>Decrease</button>

            <button id="reset" onClick={this.handleReset}>Reset</button>

          </div>
          <h2>Category: <br />
            {category?.title}</h2>

          <h4 id="points-box">Points: {value}</h4>

          <div id="answer">
            <h5>Question:</h5>
            {question}
          </div>

          <div id="question-box" onClick={() => this.setState({ toggle: !"hide" })}>
            Click Here to Reveal the Answer:

            <div>
              { answer}
              {console.log({ answer })}
            </div>
          </div>

          <div id="next-question">
            <button onClick={this.handleSubmit}>Click Here for the Next Question</button>
          </div>

        </div>
      </div>  /* closes container */
    )
  }
}



export default App;
