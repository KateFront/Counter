import React from "react";
import styleCounter from "./Counter.module.css"
import Display from "./modules/display/Display";
import ButtonsGroup from "../buttonGroup/ButtonsGroup";
import {ButtonPropsType} from "../button/Button";
import {WorkStateTypes} from "../../AppWithRedux";


export type CounterPropsType = {
    count: number;
    increment: () => void;
    reset: () => void;
    maxValue: number;
    workState: WorkStateTypes;
}

const Counter = (props: CounterPropsType) => {

    const btns: ButtonPropsType[] = [
        {onClick: props.increment, name: 'inc', isDisabled: props.workState === 'start' || props.count === props.maxValue},
        {onClick: props.reset, name: 'reset', isDisabled: props.workState === 'start'},
    ];

    return (
        <div className={styleCounter.counter}>
            <Display count={props.count} maxValue={props.maxValue} workState={props.workState}/>
            <ButtonsGroup btns={btns}/>
        </div>
    )
}

export default Counter;