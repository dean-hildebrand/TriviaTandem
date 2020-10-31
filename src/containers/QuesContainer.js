import React, { Component } from 'react'
import Question from "../presentational/Question.js";
var shuffle = require("shuffle-array");


// componentDidMount(){
  //  fetch("http://localhost:3000/questions.json)
  //  .then(res => res.json())
  //  .then(data => this.setState({
    //      questionsArray: shuffle.pick((data),{'picks':10}),
    //  }))
    // }
class Class extends Component {
  state={
   questionsArr: [],
   loading: true,
   showGame: false
 }

componentDidMount(){
  fetch("http://localhost:3000/questions.json")
  .then(res => res.json())
  .then(data => this.setState({
    questionsArr: shuffle.pick((data), {'picks':10})
  }))
}

  render() {
    console.log("QuesContainer", this.state.questionsArr)
    return (
      <div>
        <h1>Question Container</h1>

        <Question questions={this.state.questionsArr} />
      </div>
    )
  }
}

export default Class
