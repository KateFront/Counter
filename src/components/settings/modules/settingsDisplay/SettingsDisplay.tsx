import React, {ChangeEvent, FC} from "react";
import styles from "./SettingsDisplay.module.css";

type SettingsDisplayPropsType = {
    maxValue: number;
    startValue: number;
    setMaxValue: (value: number) => void;
    setStartValue: (value: number) => void;
}

const SettingsDisplay: FC<SettingsDisplayPropsType> = ({
                                                           maxValue,
                                                           setMaxValue,
                                                           setStartValue,
                                                           startValue,
                                                       }) => {
    const errorTopInputStyle = maxValue < 1 || maxValue === startValue ? styles.error : '';
    const errorBottomInputStyle = startValue < 0 || startValue === maxValue ? styles.error : '';


    return (
        <div className={styles.display}>
            <div className={styles.value}>

                <span className={styles.span}>max value:</span>

                <input className={`${styles.input} ${errorTopInputStyle}`} type="number" value={maxValue}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
                           const newValue = event.currentTarget.value;
                           setMaxValue(+newValue);
                       }}/>
            </div>

            <div className={styles.value}>

                <span className={styles.span}>start value:</span>

                <input className={`${styles.input} ${errorBottomInputStyle}`} type="number" value={startValue}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
                           const newStartValue = event.currentTarget.value;
                           setStartValue(+newStartValue);
                       }}/>
            </div>
        </div>
    )
}
export default SettingsDisplay;