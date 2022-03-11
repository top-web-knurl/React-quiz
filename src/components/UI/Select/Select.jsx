import React from "react";
import classes from './Select.module.css';



const Select = props => {
    const { title, value, onChange, options } = props;
    const { Select, SelectToggle } = classes;



    return (

        <label className={Select}>
            {title ? <legend>{title}</legend> : ''}
            <select
                className={SelectToggle}
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => {
                    return (
                        <option
                            key={index}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </label>
    )

}

export default Select;