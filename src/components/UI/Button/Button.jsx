import React from "react";
import classes from './Button.module.css';

const Button = props => {
    const { children, onClick, disabled, type } = props;
    const { Button } = classes;
    const cls = [
        Button,
        type
    ]
    return (
        <button 
        onClick={onClick}
        className={cls.join(' ')}
        disabled={disabled}
        >
            {children}
        </button>
    )

}

export default Button;