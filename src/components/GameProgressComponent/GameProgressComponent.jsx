import { useEffect, useState } from "react";
import { GameProgress } from "../../modules/GameProgress/GameProgress"
import { GameProgressCellComponent } from "../GameProgressCellComponent/GameProgressCellComponent";

export const GameProgressComponent = ({randomCell, board, isEnded, level}) => {
    const [tick, setTick] = useState(null);
    const [gameProgress, setGameProgress] = useState(new GameProgress(board, randomCell));

    useEffect(() => {
        restart();
    }, [randomCell]);

    function restart() {
        const newGameProgress = new GameProgress(board, randomCell);
        newGameProgress.initGameProgressCells();
        setGameProgress(newGameProgress);
        setTimeout(() => {
            setTick(0);
        }, 1000)
    }


    useEffect(() => {
        if (gameProgress.cells.length === tick) {
            gameProgress.board.endGameTick(gameProgress.correctCell);
        }

        setTimeout(() => {
            if (tick <= gameProgress.cells.length - 1){
                setTick((tick) => tick + 1)
            }
        }, level)
    }, [tick]);


    return (
        <div className="gameProgressContainer">
            {gameProgress.cells.map((cell, index) =>
                    <GameProgressCellComponent key={index} tick={tick} index={index} gameProgress={gameProgress} isEnded={isEnded}></GameProgressCellComponent>    
            )}
        </div>
    )
}