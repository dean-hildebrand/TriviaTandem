import React from "react";
var shuffle = require("shuffle-array");

const Question = (props) => {
  const { correct, incorrect, question } = props.currentQ;
  let answers = [...props.currentQ.incorrect, props.currentQ.correct];
  console.log("question", correct);

  // == correct.toLowerCase() ? props.right(props.currentQ) : props.wrong(props.currentQ
  return (
    <div className="question">
      <div className="question-div">
        <h1>{props.currentQ.question}</h1>
      </div>

      {!props.answered ? (
        shuffle(answers).map((answer) => {
          return (
            <button
              onClick={(e) =>
                e.target.innerText == correct
                  ? props.right(props.currentQ)
                  : props.wrong(props.currentQ)
              }
            >
              {answer}
            </button>
          );
        })
      ) : (
        <button onClick={() => props.next()}>Next Question</button>
      )}
    </div>
  );
};

export default Question;
