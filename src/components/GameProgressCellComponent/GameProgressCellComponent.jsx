import { useState } from "react"

export const GameProgressCellComponent = ({tick, index, gameProgress,isEnded }) => { 
    if (!isEnded && tick === index) {
        gameProgress.getRandomDirection(tick);
    }
    return (
        <>
            <div className={["gameProgressCell"].join(" ")}>
    
                {tick === index && gameProgress.cells[tick] !== null &&
                    <img className="gameProgressCellImg" src={gameProgress.cells[tick]} alt=""></img>
                }
            </div>
        </>
    )
}