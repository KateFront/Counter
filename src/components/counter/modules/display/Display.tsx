import React, {FC} from "react";
import styleDisplay from "./Display.module.css"

type DisplayPropsType = {
    count: number;
    maxValue: number;
}
const Display: FC<DisplayPropsType> = ({count, maxValue}) => {

    return (
        <div className={styleDisplay.display}>
            <span className={count === maxValue ? styleDisplay.error : ''}>
                {count}
            </span>
        </div>
    )
}
export default Display;
//{props.count === props.maxValue ? styleButtons.disable : props.count}