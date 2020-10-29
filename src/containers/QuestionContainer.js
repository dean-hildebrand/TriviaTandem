import React from "react";
import Question from "../presentational/Question.js";

class QuestionContainer extends React.Component {
  state = {
    questionsArr: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/questions.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          this.setState({ questionsArr: [...this.state.questionsArr, item] })
          console.log("State",this.state.questionsArr)
        });
      });
  }

  // this.setState({ questionsArr: [...this.state.questionsArr, q] })

  //   this.setState(prevState => ({
  //   arrayvar: [...prevState.arrayvar, newelement]
  // }))

  //   const months = ["January", "February", "March", "April", "May", "June", "July"];
  //
  // const random = Math.floor(Math.random() * months.length);
  // console.log(random, months[random]);

  render() {
    return (
      <div>
        <h1>Question Container</h1>
        <Question questions={this.state.questions}/>
      </div>
    );
  }
}

export default QuestionContainer;
