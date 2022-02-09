import React from "react";
import classes from './Backdrop.module.css';



const Backdrop = props => {
    const { onClick } = props;
    const { Backdrop} = classes;

    return (
    <div onClick={onClick} className={Backdrop}></div>
    )

}

export default Backdrop;