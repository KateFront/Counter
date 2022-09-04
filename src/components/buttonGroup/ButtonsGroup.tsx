import React from "react";
import styles from "./ButtonsGroup.module.css"
import Button, {ButtonPropsType} from "../button/Button";

type ButtonsGroupPropsType = {
    btns: ButtonPropsType[];
}

const ButtonsGroup = (props: ButtonsGroupPropsType) => {

    return (
        <div className={styles.buttonsGroup}>
            {props.btns.map((btn, index)=>{
                return <Button key={index}  isDisabled={btn.isDisabled} onClick={btn.onClick} name={btn.name}/>;
            })}
        </div>
    )
}
export default ButtonsGroup;