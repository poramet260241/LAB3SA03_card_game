import React, { Component } from 'react';
import WordCard from './WordCard'
import './App.css';
import CharacterCard from './CharacterCard';

const word = ["Ant", "Dog", "Book", "Table", "Computer"] ;
var level = 1;

class App extends Component {

  reload(){
    window.location.reload(true);
  }



  render() {
    return (
      <div className = "App">
        <h1>FIND A WORD</h1>
        <h1>LEVEL {level}</h1>
        <WordCard value = {word[level-1]}/>
        <br></br>
      </div>
    );
  }
}

export default App 