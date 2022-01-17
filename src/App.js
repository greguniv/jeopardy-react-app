import React, { Component } from 'react';
// CSS
import './App.css';


class App extends Component {

  state = {
    baseURL: 'http://jservice.io/api/random?',
    question: '',
    answer: '',
    category: '',
    setQuestion: '',
    toggle: true,
    score: 0,
  }

  handleIncrement = e => {
    // console.log('Increment Clicked')
    this.setState({ score: this.state.score += this.state.setQuestion.value })
  }

  handleDecrement = e => {
    // console.log('Decrement Clicked')
    this.setState({ score: this.state.score -= this.state.setQuestion.value })
  }

  handleReset = e => {
    this.setState({ score: this.state.score = 0 })
  }

  handleReveal = e => {
    const isRevealed = this.state.toggle
    this.setState({ toggle: !isRevealed })
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
        <h1>Welcome to Trivia!</h1>

        <h2>Score: {this.state.score} </h2> 

        <div className="score-button">
          <button id="increase" onClick={this.handleIncrement}>Increase</button>

          <button id="decrease" onClick={this.handleDecrement}>Decrease</button>

          <button id="reset" onClick={this.handleReset}>Reset</button>
        </div>

        <div className="cat-points">
          <h2>Category: <br />
            {category?.title}</h2>
          <h2 id="points-box">
            Points: {value}</h2>
        </div>

        <div id="answer">
          <h2>Question: <br />
            {question} </h2>
        </div>

        <div id="question-box" onClick={this.handleReveal}>
          Click Here to Reveal the Answer:
            <h3 className={this.state.toggle ? "hide" : null}>{answer}</h3>
        </div>

        <div id="next-question">
          <button id="next-question" onClick={this.handleSubmit}>Click Here for the Next Question</button>
        </div>

      </div>  /* closes container */
    )
  }
}



export default App;
