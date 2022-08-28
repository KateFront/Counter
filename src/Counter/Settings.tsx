import React from "react";
import styleCounter from "./CounterLeft.module.css"
import ButtonSet from "../Buttons/ButtonSet";

export type CounterPropsType = {
    count: number
    /*increment: () => void
    reset: () => void*/
    maxValue: number
    startValue: number
}

const CounterLeft = (props: CounterPropsType) => {

    return (
        <div className={styleCounter.counter}>
            <div className={styleCounter.display}>
                <div className={styleCounter.value}>
                    <span className={styleCounter.span}>max value:</span>
                    <input className={styleCounter.input} type="text"/>
                </div>
                <div className={styleCounter.value}>
                    <span className={styleCounter.span}>start value:</span>
                    <input className={styleCounter.input} type="text"/>
                </div>
            </div>

            <ButtonSet startValue={props.startValue}
                       maxValue={props.maxValue}
                       count={props.count}
                       /*increment={props.increment}*/
                       /*reset={props.reset}*/
            />
        </div>
    )
}

export default CounterLeft;