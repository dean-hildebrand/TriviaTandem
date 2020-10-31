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
          questionArr: shuffle.pick(data, { picks: 10 }),
          currentQuestion: data[0],
        })
      );
  }

  showQuestion() {
    // let answered = this.state.answeredQuestion;
    // let array = this.state.questionArr;

    if (this.state.answeredQuestion.length < this.state.questionArr.length) {
      let currentQuestion = this.state.questionArr.find((q) => !this.state.answeredQuestion.includes(q));
      this.setState({ currentQuestion: currentQuestion, answered: false });
    } else {
      // sweet alert
      alert("Game Over");
    }
  }

  rightAnswer = e => {
    alert("Correct!")
    this.setState({
      answeredQuestion: [...this.state.answeredQuestion, e],
      answered: !this.state.answered,
        score: this.state.score + 1
    });
  }

  wrongAnswer = e => {
    alert("Sorry, thats the wrong answer!");
    this.setState({
      answeredQuestion: [...this.state.answeredQuestion, e],
      answered: !this.state.answered
    });
  }

  render() {
    console.log("Current Question", this.state.currentQuestion);
    return (
      <div>
        {this.state.currentQuestion.question ?
          <Question
            // questions={this.state.questionsArr}
            currentQ={this.state.currentQuestion}
            answered={this.state.answered}
            right={this.rightAnswer}
            wrong={this.wrongAnswer}
            next={this.showQuestion}
          />
         : null}
      </div>
    )
  }
}

export default QuestionContainer;
