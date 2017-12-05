import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Option from './components/Option';

function shuffle(array) {
  for (var i = array.length-1; i >=0; i--) {

      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = array[randomIndex];

      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
  }
  return array;
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedCorrect: 0,
      clickedUncorrect: 0,
      optionArray: [],
    }
   this.handleClick = this.handleClick.bind(this)
   this.newGame = this.newGame.bind(this)
   console.log(this.state)
  }

  componentDidMount() {
    this.newGame()
  }

  newGame() {
    var rand1 = Math.floor(Math.random() * 11)
    var rand2 = Math.floor(Math.random() * 11)
    var correctAnswer = rand1*rand2
    var option1 = Math.floor(Math.random() * 101)
    var option2 = Math.floor(Math.random() * 101)
    var option3 = Math.floor(Math.random() * 101)
    this.setState({
      rand1: rand1,
      rand2: rand2,
      correctAnswer: correctAnswer,
      optionArray: [option1, option2, option3, correctAnswer]
    })
  }

  handleClick(option) {
    if(option === this.state.correctAnswer) {
      this.setState({
        clickedCorrect: this.state.clickedCorrect + 1,
      })
    } else {
      this.setState({
        clickedUncorrect: this.state.clickedUncorrect + 1,
      })
    }
    this.newGame()
  }
  render() {
    return (
      <div className="app">
        <Header rand1={this.state.rand1} rand2={this.state.rand2}/>
        {shuffle(this.state.optionArray.map((option) => <Option option={option} handleClick={this.handleClick}/>))}
        <h3>Correct: {this.state.clickedCorrect}</h3>
        <h3>Incorrect: {this.state.clickedUncorrect}</h3>
      </div>
    )
  }
}

export default App;


