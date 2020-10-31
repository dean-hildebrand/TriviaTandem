import React from "react";
import QuestionContainer from "./containers/QuestionContainer";
import "./App.css";
var shuffle = require("shuffle-array");

class App extends React.Component {
  state = {
    questionsArr: [],
    isLoaded: true,
    playQuiz: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/questions.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          questionsArr: shuffle.pick(data, { picks: 10 }),
        })
      );
  }

  playQuiz() {
    this.setState({ playQuiz: true });
  }

  render() {
    return (
      <div className="App">
        {!this.state.playQuiz ? (
          <button onClick={() => this.playQuiz()}>Test your Knowledge</button>
        ) : (
          <QuestionContainer questions={this.state.questionsArr} />
        )}
      </div>
    );
  }
}

export default App;
