import React from "react";

// <div className="count">
//   <span>Question 1</span>
//   <div className="question-text">
//     {this.props.questions[0].question}
//   </div>
//   <div className="answers-div">
//   {this.props.questions[0].incorrect.map((answer) => (
//     <button
//     key={"index"}
//     className="answer-btn"
//     >{answer}
//     </button>
//   ))}
//   {
//     <button
//     key={"index"}
//     className="answer-btn"
//     >{this.props.questions[0].correct}
//     </button>
//   }
//
//   </div>
// </div>


function Question() {
  // console.log("question",this.props)
  return (
    <div className="question-div">
      <div className="count">
      <span>Question 1</span>
      <div className="question-text"></div>
      </div>

    </div>
  )
}


export default Question;
