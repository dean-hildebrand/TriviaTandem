import React, { Component } from "react";
import Question from "../presentational/Question.js";
var shuffle = require("shuffle-array");

class QuestionContainer extends Component {
  state = {
    questionArr: [],
    currentQuestion: {},
    answeredQuestion: [],
    score: 0,
    answered: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/questions.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          questionArr: shuffle.pick(data, { 'picks': 10 }),
          currentQuestion: data[0],
        })
      );
  }

  showQuestion(){
    let answered = this.state.answered
    let array = this.state.questionArr

    if(answered.length < array.length){
      let currentQuestion = array.find(q => !answered.includes(q))
      this.setState({ currentQuestion: currentQuestion, answered: false})
    } else {
      // sweet alert
      alert("Game Over")
    }
  }

  rightAnswer(event){
    alert("Correct!")
    this.setState({
      answeredQuestion: [...this.state.answeredQuestion, e],
      answered: !this.state.answered
    })
  }

  render() {
    console.log("Current Question", this.state.currentQuestion.question);
    return (
      <div>
        <Question
        questions ={this.state.questionsArr}
        currentQ ={this.state.currentQuestion}

        />
      </div>
    );
  }
}

export default QuestionContainer;
