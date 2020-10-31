import React from "react";
import QuestionContainer from "./containers/QuestionContainer";
import "./App.css";

class App extends React.Component {
  state = {
    isLoaded: true,
    playQuiz: false,
  };



  playQuiz() {
    this.setState({ playQuiz: true });
  }

  render() {
    return (
      <div className="App">
      <div className="header">
      <h1>Tandem-Trivia</h1>
      </div>
        {!this.state.playQuiz ? (
          <button className="btn start-btn" onClick={() => this.playQuiz()}>START</button>
        ) : (
          <QuestionContainer />
        )}
      </div>
    );
  }
}

export default App;
