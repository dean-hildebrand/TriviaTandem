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
        {!this.state.playQuiz ? (
          <button onClick={() => this.playQuiz()}>Test your Knowledge</button>
        ) : (
          <QuestionContainer />
        )}
      </div>
    );
  }
}

export default App;
