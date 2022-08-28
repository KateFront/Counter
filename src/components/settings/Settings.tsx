import React, {FC} from "react";
import styles from "./Settings.module.css"
import ButtonsGroup from "../buttonGroup/ButtonsGroup";
import SettingsDisplay from "./modules/settingsDisplay/SettingsDisplay";

export type CounterPropsType = {
    count: number;
    maxValue: number;
    startValue: number;
    setMaxValue: (value: number) => void;
    setStartValue: (value: number) => void;
    isRestrict: boolean;
}


const Settings: FC<CounterPropsType> = ({maxValue, startValue, setMaxValue, setStartValue, isRestrict}) => {


    return (
        <div className={styles.container}>
            <div className={styles.wrapperSettingDisplay}>
                <SettingsDisplay maxValue={maxValue}
                                 setMaxValue={setStartValue}
                                 startValue={startValue}
                                 setStartValue={setStartValue}
                />
            </div>
            <div className={styles.wrapperBtns}>
                <ButtonsGroup btns={
                    [{
                        onClick: () => {
                        }, name: 'set', isDisabled: false
                    },]
                }/>
            </div>
        </div>
    )
}

export default Settings;