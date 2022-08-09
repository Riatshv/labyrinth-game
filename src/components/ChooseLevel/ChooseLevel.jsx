import { DIFFICULTY_CONSTANTS } from "../../constants/levelDifficulty";

export const ChooseLevel = ({onChangeLevel, level, board}) => {
    const levelTitle = board.chooseLevelTitle(level);

    return (
        <div>
            <div className="chooseLevelContainer">
                <h3>Выберите сложность:</h3>
                <button className={["chooseLevelBtn", "chooseLevelBtn_easy", levelTitle === "Легкая" ? "activeBtn" : ""].join(" ")} onClick={() => onChangeLevel(DIFFICULTY_CONSTANTS.easy)}>Легкая</button>
                <button className={["chooseLevelBtn", "chooseLevelBtn_hard", levelTitle === "Сложная" ? "activeBtn" : ""].join(" ")} onClick={() => onChangeLevel(DIFFICULTY_CONSTANTS.hard)}>Сложная</button>
            </div>
            <div className="levelTitle">Выбрана сложность: {levelTitle}</div>
        </div>
    )
}