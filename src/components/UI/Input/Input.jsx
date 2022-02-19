import React from "react";
import classes from './Input.module.css';


function isInValid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate;
}

const Input = props => {
    const { value, disabled, type = 'text', legend, onChange, errorMessage} = props;
    const { Input } = classes;

    return (
        <label className={`${Input} ${isInValid(props) ? 'invalid' : null}`}>
            {legend ? <legend>{legend}</legend> : null}
            <input
                className={Input}
                disabled={disabled}
                type={type}
                value={value}
                onChange={onChange}
            />

            {errorMessage ? <span>{errorMessage}</span> : null}
        </label>
    )

}

export default Input;