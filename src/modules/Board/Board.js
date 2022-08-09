import { DIFFICULTY_CONSTANTS } from "../../constants/levelDifficulty";
import { Cell } from "../Cell/Cell";

export class Board {
    m = null;
    n = null;
    cells = [];
    setStart = () => null;
    setEnd = () => null;
    setChoosenCell = () => null;
    setClicked = () => null;
    randomCell = null;
    correctCell = null;
    setBoard = () => null;
    setCorrectAnswers = () => null;

    constructor(m, n, setStart, setEnd, setChoosenCell, setClicked, setBoard, setCorrectAnswers) {
        this.m = m;
        this.n = n;
        this.setStart = setStart;
        this.setEnd = setEnd;
        this.setChoosenCell = setChoosenCell;
        this.setClicked = setClicked;
        this.setBoard = setBoard;
        this.setCorrectAnswers = setCorrectAnswers;
    }

    initBoard = () => {
        for (let x = 0; x < this.m; x++) {
            let row = [];
            for (let y = 0; y < this.n; y++) {
                row.push(new Cell(x,y));
            }
            this.cells.push(row);
        }
    }

    getRandomValue = (value) => {
        return Math.round(Math.random()*(value))
    }

    startGame = () => {
        this.randomCell = this.cells[ this.getRandomValue(this.m - 1) ][ this.getRandomValue(this.n - 1) ]
        this.setStart(true);
    }

    endGameTick = (correctCell) => {
        this.correctCell = correctCell;
        this.setEnd(true)
    }


    endGame = () => {
        const newBoard = new Board(3, 3, this.setStart, this.setEnd, this.setChoosenCell, this.setClicked, this.setBoard, this.setCorrectAnswers);
        newBoard.initBoard();
        this.setBoard(newBoard);
        this.setChoosenCell(null);
        this.setEnd(false);
        this.setStart(false);
        this.setClicked(false);
        this.setCorrectAnswers(0);
    }

    clickOnCell = (x,y) => {
        this.setChoosenCell({x: x, y: y})
        this.setClicked(true);
        if (this.correctCell.y === y && this.correctCell.x === x) {
            this.setCorrectAnswers((count) => count + 1)
        }
        setTimeout(() => {
            const newBoard = new Board(3, 3, this.setStart, this.setEnd, this.setChoosenCell, this.setClicked, this.setBoard, this.setCorrectAnswers);
            newBoard.initBoard();
            newBoard.randomCell = this.cells[ this.getRandomValue(this.m - 1) ][ this.getRandomValue(this.n - 1) ]
            this.setBoard(newBoard);
            this.setChoosenCell(null);
            this.setEnd(false);
            this.setClicked(false);
        }, 3000)
    }

    chooseLevelTitle(level) {
        switch (level) {
            case DIFFICULTY_CONSTANTS.easy: {
                return "Легкая";
            }
            
            case DIFFICULTY_CONSTANTS.hard: {
                return "Сложная";
            }

            default: {
                return;
            }
        }
    }


}