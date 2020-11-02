import React, { Component } from "react";
import Question from "../presentational/Question.js";
import cssStyle from "../css/QuestionContainer.css";
import swal from "sweetalert";

class QuestionContainer extends Component {
  state = {
    questionArr: this.props.questionArr,
    currentQuestion: this.props.questionArr[0],
    answeredQuestion: [],
    score: 0,
    showTrivia: false,
    answered: false,
  };

  showQuestion = () => {
    if (this.state.answeredQuestion.length < this.props.questionArr.length) {
      let currentQuestion = this.props.questionArr.find(
        (q) => !this.state.answeredQuestion.includes(q)
      );
      this.setState({
        currentQuestion: currentQuestion,
        answered: false,
      });
    } else {
      swal("Game Over", "Your score was" + " " + this.state.score);
    }
  };

  rightAnswer = (e) => {
    swal("Correct!", "Keep it up!", "success");
    this.setState({
      answeredQuestion: [...this.state.answeredQuestion, e],
      answered: !this.state.answered,
      score: this.state.score + 1,
    });
  };

  wrongAnswer = (e) => {
    swal("Incorrect", "Try again!", "error");
    this.setState({
      answeredQuestion: [...this.state.answeredQuestion, e],
      answered: !this.state.answered,
    });
  };

  render() {
    return (
      <div>
        {this.state.currentQuestion.question ? (
          <Question
            currentQ={this.state.currentQuestion}
            answered={this.state.answered}
            right={this.rightAnswer}
            wrong={this.wrongAnswer}
            next={this.showQuestion}
          />
        ) : null}

        <h2 className="score"> Current Score: {this.state.score}</h2>
      </div>
    );
  }
}

export default QuestionContainer;
