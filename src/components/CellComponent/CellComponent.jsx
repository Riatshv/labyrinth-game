export const CellComponent = ({cell, activeCell, hardLevel, clickOnCell, correctAnswer, answer, answer1}) => {
    return (
        <div
            onClick={() => clickOnCell(cell.x, cell.y)}
            className={["cell", activeCell, correctAnswer, answer, answer1, hardLevel].join(" ")}
        >

        </div>
    )
}