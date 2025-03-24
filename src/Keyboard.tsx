import style from "./keyboard.module.css"

const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

type keyBoardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled    }: keyBoardProps) {

    return (
    <div style={{display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", 
    gap: ".5rem"}}>

        {KEYS.map(key => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);

            return(<button
            onClick={() => addGuessedLetter(key)} 
            className= {`${style.btn} ${isActive ? style.active : " "}
            ${isInactive ? style.inactive : " "}`} 
            key={key}
            disabled =  {(isActive || isInactive || disabled)}>
                {key}
            </button>)
        })}

    </div>
    )
}