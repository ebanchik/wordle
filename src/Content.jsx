import { wordBank } from "./WordBank";
import { useState } from 'react';

export function Content() {
  const [winningWord, setWinningWord] = useState('')
  const [guessedWord, setGuessedWord] = useState('')
  
  const wordCheck = (guessedWord, wordBank) => {
    if (wordBank.includes(guessedWord)) {
      console.log(`${guessedWord} is in the array`);
    } else {
      console.log(`${guessedWord} is not in the array`);
     }
    }
  
  // const handleInputChange = (event) => {
  //   setWinningWord(event.target.value);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   wordCheck(word, WORDS);
  // };
  
  
  return (
    <main>
      <h1>Welcome to Wordle!</h1>
      <div>
      <input type="text" value={guessedWord} onChange={(event) => setGuessedWord(event.target.value) } ></input>
      <button type="submit" onClick = {wordCheck}>Submit</button>
        <p>{ guessedWord }</p>
      </div>
    </main>
  )
}
