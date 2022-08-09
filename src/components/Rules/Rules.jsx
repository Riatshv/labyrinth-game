export const Rules = ({openRules, button}) => {
    return (
        <button className = "rules__button" ref={button} onClick={() => {
            openRules(); 
        }}
        >
            Правила игры
        </button>
    )
}