import React, {FC} from "react";
import styles from "./Settings.module.css"
import ButtonsGroup from "../buttonGroup/ButtonsGroup";
import SettingsDisplay from "./modules/settingsDisplay/SettingsDisplay";
import {WorkStateTypes} from "../../AppWithRedux";

export type CounterPropsType = {
    count: number;
    maxValue: number;
    startValue: number;
    setMaxValue: (value: number) => void;
    setStartValue: (value: number) => void;
    workState: WorkStateTypes;
    handleSetClick: () => void;
}


const Settings: FC<CounterPropsType> = ({
                                            maxValue,
                                            startValue,
                                            setMaxValue,
                                            setStartValue,
                                             workState,
                                            handleSetClick
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
                            handleSetClick();
                        }, name: 'set', isDisabled: isDisabled,
                    },]
                }/>
            </div>
        </div>
    )
}

export default Settings;