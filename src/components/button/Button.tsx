import React from "react";
import styles from "./Button.module.css"

export type ButtonPropsType = {
    onClick: () => void;
    isDisabled: boolean;
    name: string;
}


const Button = (props: ButtonPropsType) => {

    const disabledBtnStyles = `${props.isDisabled ? styles.disabled : ''}`;


    return (
        <button className={`${styles.btn} ${disabledBtnStyles}`}
                onClick={props.onClick}
                disabled={props.isDisabled}>
            {props.name}
        </button>
    )
}
export default Button;