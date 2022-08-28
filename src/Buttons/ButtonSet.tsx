import React from "react";
import styles from "./ButtonSet.module.css"

type ButtonPropsType = {
    onClick: ()=>void;
    isDisabled: boolean;
}

const ButtonSet = (props: ButtonPropsType) => {

    const disabledLeftBtnStyles = `${props.isDisabled ? styles.disabled : ''}`;

    return (
        <div className={styles.buttonsGroup}>
            <button className={`${styles.btn} ${disabledLeftBtnStyles}`}
                    onClick={props.onClick}
                    disabled={props.isDisabled}>set
            </button>
        </div>
    )
}
export default ButtonSet;