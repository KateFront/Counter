import React from "react";
import styleCounter from "./Counter.module.css"
import Display from "./modules/display/Display";
import ButtonsGroup from "../buttonGroup/ButtonsGroup";
import {ButtonPropsType} from "../button/Button";


export type CounterPropsType = {
    count: number;
    increment: () => void;
    reset: () => void;
    maxValue: number;
    isRestrict: boolean;
}

const Counter = (props: CounterPropsType) => {

    const btns: ButtonPropsType[] = [
        {onClick: props.increment, name: 'inc', isDisabled: props.count === props.maxValue},
        {onClick: props.reset, name: 'reset', isDisabled: props.count === 0},
    ];

    return (
        <div className={styleCounter.counter}>
            <Display count={props.count} maxValue={props.maxValue} />
            <ButtonsGroup btns={btns} />
        </div>
    )
}

export default Counter;