import React, {FC} from "react";
import styles from "./Settings.module.css"
import ButtonsGroup from "../buttonGroup/ButtonsGroup";
import SettingsDisplay from "./modules/settingsDisplay/SettingsDisplay";
import {WorkStateTypes} from "../../App";

export type CounterPropsType = {
    count: number;
    maxValue: number;
    startValue: number;
    setMaxValue: (value: number) => void;
    setStartValue: (value: number) => void;
    changeWorkState: (value: WorkStateTypes) => void;
    workState: WorkStateTypes;
    saveData: () => void;
}


const Settings: FC<CounterPropsType> = ({
                                            maxValue,
                                            startValue,
                                            setMaxValue,
                                            setStartValue,
                                            changeWorkState, workState,saveData
                                        }) => {

    const isDisabled = workState !== "start";

    return (
        <div className={styles.container}>
            <div className={styles.wrapperSettingDisplay}>
                <SettingsDisplay maxValue={maxValue}
                                 setMaxValue={setMaxValue}
                                 startValue={startValue}
                                 setStartValue={setStartValue}
                />
            </div>
            <div className={styles.wrapperBtns}>
                <ButtonsGroup btns={
                    [{
                        onClick: () => {
                            changeWorkState("work");
                            saveData();
                        }, name: 'set', isDisabled: isDisabled,
                    },]
                }/>
            </div>
        </div>
    )
}

export default Settings;