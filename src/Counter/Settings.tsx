import React, {ChangeEvent} from "react";
import styleCounter from "./Settings.module.css"
import ButtonSet from "../Buttons/ButtonSet";

export type CounterPropsType = {
    count: number;
    maxValue: number;
    startValue: number;
    setMaxValue: (value: number) => void;
    setStartValue: (value: number) => void;
    isRestrict: boolean;
}


const Settings = (props: CounterPropsType) => {


    return (
        <div className={styleCounter.counter}>
            <div className={styleCounter.display}>
                <div className={styleCounter.value}>
                    <span className={styleCounter.span}>max value:</span>
                    <input className={styleCounter.input} type="number" value={props.maxValue}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               const newValue = event.currentTarget.value;
                               props.setMaxValue(+newValue);
                           }}/>
                </div>
                <div className={styleCounter.value}>
                    <span className={styleCounter.span}>start value:</span>
                    <input className={styleCounter.input} type="number" value={props.startValue}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               const newStartValue = event.currentTarget.value;
                               props.setStartValue(+newStartValue);
                           }}/>
                </div>
            </div>

            <ButtonSet onClick={() => {
            }}
                       isDisabled={false}
            />
        </div>
    )
}

export default Settings;