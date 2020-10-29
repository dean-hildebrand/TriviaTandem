import React from 'react'
import Question from '../presentational/Question.js'

class QuestionContainer extends React.Component {

  state = {
    questionsArr: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/questions.json")
  .then(res => res.json())
  .then(data => this.setState({ questionsArr: data}))
  }

  getQuestions(){

  }

  render() {
    return (
  <div>
    <h1>Question Container</h1>
    <Question />
  </div>
);


  }
}

export default QuestionContainer
