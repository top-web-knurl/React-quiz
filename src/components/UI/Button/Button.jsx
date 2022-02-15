import React from "react";
import classes from './Button.module.css';

const Button = props => {
    const { children, onClick, disabled, type } = props;
    const { Button } = classes;
    let typeClass = '';

    //преоброзуем пропсы в классы css модуля
    Object.entries(classes).find(cls => {
        if (cls[0] === type) {
            typeClass = cls[1];
        }
        return null;
    });

    return (
        <button
            onClick={onClick}
            className={`${Button} ${typeClass}`}
            disabled={disabled}
        >
            {children}
        </button>
    )

}

export default Button;