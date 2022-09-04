import React, {FC} from "react";
import styleDisplay from "./Display.module.css"
import {WorkStateTypes} from "../../../../App";

type DisplayPropsType = {
    count: number;
    maxValue: number;
    workState: WorkStateTypes;
}

const Display: FC<DisplayPropsType> = ({count, maxValue, workState}) => {

    const displayValue = {
        'work': count,
        'start': "enter value and press set",
        'error': "incorrect value",
    };

    return (
        <div className={styleDisplay.display}>
            <span className={count === maxValue ? styleDisplay.error : ''}>
                {displayValue[workState]}
            </span>
        </div>
    )
}
export default Display;