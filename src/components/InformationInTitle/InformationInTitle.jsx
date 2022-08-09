export const InformationInTitle = ({isEnded, isCorrect}) => {
    return (
        isEnded === false ? 
            <h3>Идет игра... </h3>
        :
            <h3>Выберите правильный вариант ответа</h3>
        
    )
}