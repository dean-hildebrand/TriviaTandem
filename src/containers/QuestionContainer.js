import React from "react";
import Question from "../presentational/Question.js";
var shuffle = require("shuffle-array");

class QuestionContainer extends React.Component {
  state = {
    questionsArr: [],
  };

  // componentDidMount() {
  //   fetch("http://localhost:3001/questions.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.forEach((item) => {
  //         this.setState({ questionsArr: [...this.state.questionsArr, item] });
  //         // console.log("State",this.state.questionsArr)
  //       });
  //     });
  // }

  componentDidMount() {
    fetch("http://localhost:3001/questions.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          questionsArr: shuffle.pick(data, { 'picks': 10 }),
          loading: false,
        })
      );
  }

  render() {
    console.log("ques",this.state.questionsArr)

    return (
      <div>
        <h1>Question Container</h1>

        <Question questions={this.state.questionsArr} />
      </div>
    );
  }
}

export default QuestionContainer;
