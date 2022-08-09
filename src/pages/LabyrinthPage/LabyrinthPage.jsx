import { useEffect, useState, useRef } from "react";
import { BoardComponent } from "../../components/BoardComponent/BoardComponent"
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { Rules } from "../../components/Rules/Rules";
import { DIFFICULTY_CONSTANTS } from "../../constants/levelDifficulty";
import { Board } from "../../modules/Board/Board"

export const LabyrinthPage = () => {
    const [isStarted, setStart] = useState(false);
    const [isEnded, setEnd] = useState(false);
    const [choosenCell, setChoosenCell] = useState(null);
    const [isClicked, setClicked] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [level, setLevel] = useState(DIFFICULTY_CONSTANTS.easy);
    const [board, setBoard] = useState(new Board(3, 3, setStart, setEnd, setChoosenCell, setClicked, setCorrectAnswers));
    const [isModalOpen, setModalOpen] = useState(false);
    const button = useRef(null);
    
    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newBoard = new Board(3, 3, setStart, setEnd, setChoosenCell, setClicked, setBoard, setCorrectAnswers);
        newBoard.initBoard();
        setBoard(newBoard);
    };
    
    const openRules = () => {
        setModalOpen(true)
    }

    const closeRules = () => {
        setModalOpen(false)
    }

    return (
        <>
            <div className={["container", isModalOpen ? "modalOpened" : ""].join(" ")}>
                <BoardComponent board={board} setClicked={setClicked} randomCell={board.randomCell} isStarted={isStarted} choosenCell={choosenCell} correctCell={board.correctCell} isEnded={isEnded} isClicked={isClicked} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} level={level} setLevel={setLevel}></BoardComponent>
                {!isStarted && 
                    <Rules openRules={openRules} button={button}></Rules>
                }
    
            </div>
            {isModalOpen && <ModalWindow closeRules={closeRules} button={button}></ModalWindow>}
        </>
    )
}