import React from "react";
import QuestionContainer from "./containers/QuestionContainer";
import "./App.css";
var shuffle = require("shuffle-array");


class App extends React.Component {
  state = {
    questionArr: [],
    currentQuestions: [],
    showTrivia: false,
    playQuiz: false,
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
    return (
      <div className="App">
      <div className="header">
      <h1>Tandem-Trivia</h1>
      </div>
        {!this.state.showTrivia ?
          <button className="btn start-btn" onClick={() => this.playQuiz()}>START</button>
         : null }
        {this.state.showTrivia ?
          <QuestionContainer
          questionArr={this.state.questionArr}
          reset={this.playQuiz}/>
          : null
          }
      </div> )
  }
}

export default App;
