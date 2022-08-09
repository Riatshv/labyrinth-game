import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import upArrow from "../../images/up-arrow.png" 
import downArrow from "../../images/down-arrow.png" 

export class GameProgress {
    board = null;
    randomCell = null;
    correctCell = null;
    cells = [];

    constructor(board, randomCell) {
        this.board = board;
        this.randomCell = randomCell;
        this.correctCell = Object.assign({}, randomCell);
    }

    initGameProgressCells = () => {
        for (let i = 0; i < 10; i++) {
            this.cells.push(null);
        }
    }

    topBorder = () => {
        if (this.correctCell.x === 0) {
            return true;
        }
        return false;
    }

    bottomBorder = () => {
        if (this.correctCell.x === this.board.cells.length - 1) {
            return true;
        }
        return false;
    }

    leftBorder = () => {
        if (this.correctCell.y === 0) {
            return true;
        }
        return false;
    }

    rightBorder = () => {
        if (this.correctCell.y === this.board.cells[0].length - 1) {
            return true;
        }
        return false;
    }

    moveRight = (tick) => {
        this.correctCell.y += 1;
        this.cells[tick] = rightArrow;
    }
    moveLeft = (tick) => {
        this.correctCell.y -= 1;
        this.cells[tick] = leftArrow;
    }
    moveTop = (tick) => {
        this.correctCell.x -= 1;
        this.cells[tick] = upArrow;
    }
    moveBottom = (tick) => {
        this.correctCell.x += 1;
        this.cells[tick] = downArrow;
    }

    getRandomDirection = (tick) => {
        const arrFunc = [this.moveRight, this.moveLeft, this.moveBottom, this.moveTop];

        if (this.topBorder()) {
            const deleteFromThisIndex = arrFunc.findIndex((func) => func === this.moveTop);
            arrFunc.splice(deleteFromThisIndex, 1);
        }

        if (this.bottomBorder()) {
            const deleteFromThisIndex = arrFunc.findIndex((func) => func === this.moveBottom);
            arrFunc.splice(deleteFromThisIndex, 1);
        }

        if (this.leftBorder()) {
            const deleteFromThisIndex = arrFunc.findIndex((func) => func === this.moveLeft);
            arrFunc.splice(deleteFromThisIndex, 1);
        }

        if (this.rightBorder()) {
            const deleteFromThisIndex = arrFunc.findIndex((func) => func === this.moveRight);
            arrFunc.splice(deleteFromThisIndex, 1);
        }
        const nearestNumber = Math.round(Math.random()*(arrFunc.length - 1));
        arrFunc[nearestNumber](tick);
        
    }

}