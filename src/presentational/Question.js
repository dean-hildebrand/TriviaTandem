import React from "react";

class Question extends React.Component {

  render() {
    console.log("questions comp",this.props.questions[0].incorrect);
    return (
      <div className="question-div">
        {this.props.questions ? (
          <div className="count">
            <span>Question 1</span>
            <div className="question-text">
              {this.props.questions[0].question}
            </div>
            <div className="answers-div">
            {this.props.questions[0].incorrect.map((answer) => (
              <button
              key={"index"}
              className="answer-btn"
              >{answer}
              </button>
            ))}

            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Question;
