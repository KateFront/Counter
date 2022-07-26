import React from "react";
import Display from "../Display/Display";
import ButtonsGroup from "../Buttons/ButtonsGroup";
import styleCounter from "./Counter.module.css"

export type CounterPropsType = {
    count: number
    increment: () => void
    reset: () => void
    maxValue: number
}

const Counter = (props: CounterPropsType) => {

    return (
        <div className={styleCounter.counter}>
            <Display count={props.count} maxValue={props.maxValue} />

            <ButtonsGroup increment={props.increment}
                          reset={props.reset}
                          maxValue={props.maxValue}
                          count={props.count}
            />
        </div>
    )
}

export default Counter;