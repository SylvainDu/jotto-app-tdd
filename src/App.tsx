import React from 'react';
import './App.css';
import CongratsComponent from "./component/congratsComponent/congrats-component";
import GuessedWordComponent from "./component/guessedWordComponent/guessed-word-component";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <CongratsComponent success={true}/>
      <GuessedWordComponent guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]}/>
    </div>
  );
}

export default App;
