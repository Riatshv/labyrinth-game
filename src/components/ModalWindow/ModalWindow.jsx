import { useEffect, useRef } from "react"

export const ModalWindow = ({closeRules, button}) => {
    const ref = useRef(null);

    const callback = (e) => {
        const isButton = e.target === button.current;
        const isModalWindowElem = e.target === ref.current && ref.current.contains(e.target)
        const isChildrenModalWindowElem = ref.current.contains(e.target)

        if (!isButton && !isModalWindowElem && !isChildrenModalWindowElem) {
            closeRules();
        }
    }
    useEffect(() => {
        window.addEventListener("click", callback)

        return() => {
            window.removeEventListener("click", callback)
        }
    }, [])

    return (
        <div ref={ref} className="modalWindow">
            <p>Перед вами игра лабиринт! Правила этой игры очень просты: на панеле из девяти ячеек случайным образом выбирается ячейка, 
            с который вы начинаете движение (она будет обозначена значком "start"). Затем на нижних десяти ячейках справа-налево сверху-вниз будет показано направление
            движения стартовой ячейки. Чтобы выиграть, нужно следить за движением и в конце правильно выбрать финальную ячейку. Удачи! Уровень сложности
            изменяет скорость показа движения стартовой ячейки. Игра продолжается бесконечно до тех пор, пока вы не нажмете кнопку "Закончить игру"</p>
        </div>
    )
}