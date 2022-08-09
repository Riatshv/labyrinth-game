export const Answer = ({isCorrect}) => {
    return (
        isCorrect === true ?
            <h3>Верно!</h3>
        :
            <h3>Не верно :(</h3>
    )
}