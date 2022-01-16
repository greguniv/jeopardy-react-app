import React, { Component } from 'react';
// CSS
import './App.css';

//Components
let element = document.getElementsByClassName("hide");
function toggle() {
  element.className.toggle("hide")
}



class App extends Component {

  state = {
    baseURL: 'http://jservice.io/api/random?',
    question: '',
    answer: '',
    category: '',
    setQuestion: '',
    toggle: false,
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
    // console.log('we out here')
    // console.log(this.state.setQuestion)

    const { category, answer, question, value } = this.state.setQuestion

    return (
      // console.log('hello'),
      <div id="container">
        <div>
          <h1>Welcome to Trivia!</h1>

            <h2>Score: </h2>
          <div className="score-button">
            <button id="increase">Increase</button>

            <button id="decrease">Decrease</button>

            <button id="reset">Reset</button>

          </div>
          <h2>Category: <br />
            {category?.title}</h2>

          <h4 id="points-box">Points: {value}</h4>

          <div id="answer">
            <h5>Question:</h5>
            {question}
          </div>
            
          <div id="question-box" onClick={() => this.setState({toggle: !this.state.toggle})}>
            Click Here to Reveal the Answer:

              <div className="hide" > 
                {answer}
                {console.log({answer})}
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
