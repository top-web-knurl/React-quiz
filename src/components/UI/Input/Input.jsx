import React from "react";
import classes from './Input.module.css';

function isInValid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate;
}

const Input = props => {
    const { value, disabled, type = 'text', legend, onChange, errorMessage} = props;
    const { Input, invalid } = classes;
    const validFlag = isInValid(props);
    return (
        <label className={`${Input} ${validFlag ? invalid : ''}`}>
            {legend ? <legend>{legend}</legend> : null}
            <input
                className={Input}
                disabled={disabled}
                type={type}
                value={value.trim()}
                onChange={onChange}
            />

            {validFlag ? <span>{errorMessage}</span> : null}
        </label>
    )

}

export default Input;