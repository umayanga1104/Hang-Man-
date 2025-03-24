type HangmanWordProps = {
  reveal?: boolean
  guessedLetters: string[]
  wordToGuess: string
}

export function HangmanWord({guessedLetters, wordToGuess, reveal =false} : HangmanWordProps) {
    return ( 
    <>
    <div style={{display: "flex",
    gap: "1em", 
    fontSize: "6rem", 
    fontWeight: "bold", 
    textTransform: "uppercase", 
    fontFamily: "monospace"}}
    >
        {wordToGuess.split('').map((letter, index) => (
          <span style={{borderBottom: "0.1em black solid"}} key={index}>
            <span style={{visibility: guessedLetters.includes(letter) || reveal?
              "visible":
              "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red": "black"
            }}>
              {letter}
            </span>
          </span>
        ))}
    </div>
    </> )
}