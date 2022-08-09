import { Answer } from "../Answer/Answer";
import { CellComponent } from "../CellComponent/CellComponent"
import { ChooseLevel } from "../ChooseLevel/ChooseLevel";
import { CountCorrectAnswers } from "../CountCorrectAnswers/CountCorrectAnswers";
import { EndGame } from "../EndGame/EndGame";
import { GameProgressComponent } from "../GameProgressComponent/GameProgressComponent"
import { InformationInTitle } from "../InformationInTitle/InformationInTitle";
import { StartGame } from "../StartGame/StartGame"

export const BoardComponent = ({board, randomCell, isStarted, isEnded, correctCell, choosenCell, isClicked, setCorrectAnswers, correctAnswers, setLevel, level}) => {
    const isCorrect = choosenCell && correctCell?.x === choosenCell?.x && correctCell?.y === choosenCell?.y
    const isThisCell = (x, y) => {
        if (choosenCell.x === x && choosenCell.y === y) {
            return true;
        } 
        return false;
    }
    
    return (
        <>  
            {!isStarted && <ChooseLevel onChangeLevel={setLevel} level={level} board={board}></ChooseLevel>}
            {isStarted && <CountCorrectAnswers setCorrectAnswers={setCorrectAnswers} isCorrect={choosenCell && correctCell?.x === choosenCell?.x && correctCell?.y === choosenCell?.y} correctAnswers={correctAnswers}></CountCorrectAnswers>}
            {isStarted && <InformationInTitle isEnded={isEnded}></InformationInTitle>}
            {isClicked && <Answer isCorrect={choosenCell && correctCell?.x === choosenCell?.x && correctCell?.y === choosenCell?.y}></Answer>}

            <div className="boardContainer">
                {board.cells.map((row) => 
                    row.map((cell, index) => 
                        <CellComponent 
                            cell={cell}
                            key={index}
                            row = {row}
                            index = {index}
                            answer = {!isCorrect && isCorrect!==null && isThisCell(cell.x, cell.y) ? "answer" : ""}
                            answer1 = {!isCorrect && isCorrect!==null && correctCell.x === cell.x && correctCell.y === cell.y? "correct" : ""}
                            correctAnswer = {isCorrect && isCorrect!==null && isThisCell(cell.x, cell.y) ? "correct" : ""}
                            activeCell={randomCell?.x === cell.x && randomCell?.y === cell.y ? "active" : null}
                            hardLevel = {board.chooseLevelTitle(level) === "Сложная" ? "hard" : ""}
                            clickOnCell = {isEnded && !isClicked ? board.clickOnCell : () => {}}
                            board={board}
                        />
                    )
                )}
    
                {!isStarted && <StartGame startGame={board.startGame}></StartGame>}
    
                {isStarted && 
                    <GameProgressComponent 
                        board={board} 
                        randomCell={randomCell} 
                        isEnded={isEnded} 
                        isStarted={isStarted}
                        level={level}
                    />
                }

                {isStarted && <EndGame endGame = {board.endGame}></EndGame>}
            </div>
        </>
    )
}