import React, { Component } from "react";
// import Question from "../presentational/Question.js";
var shuffle = require("shuffle-array");

class QuestionContainer extends Component {
  state = {
    questionArr: [],
    currentQuestion: {},
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

  render() {
    // console.log(this.state.currentQuestion);
    return (
      <div>
        <h1>Question Container</h1>
      </div>
    );
  }
}

export default QuestionContainer;
