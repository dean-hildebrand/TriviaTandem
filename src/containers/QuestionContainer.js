import React from "react";
import Question from "../presentational/Question.js";

class QuestionContainer extends React.Component {
  state = {
    questionsArr: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/questions.json")
      .then((res) => res.json())
      .then((data) => this.setState({ questionsArr: data }));
  }

//   const months = ["January", "February", "March", "April", "May", "June", "July"];
//
// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);

  getQuestions() {
    let uniqueQuestion = this.state.questionsArr.map(q => q.question);
    console.log(uniqueQuestion);
    return uniqueQuestion;
  }

  render() {
    return (
      <div>
        <h1>Question Container</h1>
        <Question question={this.getQuestions()} />
      </div>
    );
  }
}

export default QuestionContainer;
