import { useEffect } from "react"

export const CountCorrectAnswers = ({correctAnswers}) => {
    return (
        <h2>Количество правильных ответов: {correctAnswers}</h2>
    )
}