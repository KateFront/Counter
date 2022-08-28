import React from "react";
import styles from "./ButtonsGroup.module.css"

type ButtonPropsType = {
    increment: () => void
    reset: () => void
    maxValue: number
    count: number
}

const ButtonsGroup = (props: ButtonPropsType) => {

    const disabledLeftBtnStyles = `${props.count === props.maxValue ? styles.disabled : ''}`;
    const disabledRightBtnStyles = `${props.count === 0 ? styles.disabled : ''}`;
    return (
        <div className={styles.buttonsGroup}>
            <button className={`${styles.btn} ${disabledLeftBtnStyles}`}
                    onClick={props.increment}
                    disabled={props.count === props.maxValue}>inc
            </button>
            <button className={`${styles.btn} ${disabledRightBtnStyles}`}
                    onClick={props.reset}
                    disabled={props.count === 0}>reset
            </button>
        </div>
    )
}
export default ButtonsGroup;