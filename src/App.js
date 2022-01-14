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
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()

  //   this.setState({
  //     data: {
  //       question: this.state.question,
  //       answer: this.state.answer,
  //       category: this.state.category,
  //     }

  //   }, () => {
  //     fetch(this.state.baseURL)
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(error => console.error(error))
  //   })
  // }

  componentDidMount() {
    // console.log('mounted app.js')
    fetch(this.state.baseURL)
      .then(response => response.json())
      .then(data => this.setState({ setQuestion: data.pop() }))
      .catch(error => console.error(error))
  }

  render() {
    // console.log('we out here')
    // console.log(this.state.setQuestion)

    const { category, answer, question, value } = this.state.setQuestion

    return (
      // console.log('hello'),
      <div id="container">
        <div>
          <h1>Welcome to Trivia!</h1>

          <h2>Score: </h2>
          <h2>Category: {category?.title}</h2>
          <h4>Points: {value}</h4>
          <div id="answer">
            <h5>Answer: {answer}</h5>
          </div>

          <div id="question-box">
            <h3>What is...?: {question}</h3>
            </div>
        </div>
      </div>  /* closes container */
    )
  }
}



export default App;
