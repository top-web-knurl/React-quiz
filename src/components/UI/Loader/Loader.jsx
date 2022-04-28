import React from "react";
import classes from './Loader.module.css';



const Loader = props => {
    const { Loader, LoaderWrapper } = classes;
    return (
        <div className={LoaderWrapper}>
            <div className={Loader}>
            </div>
        </div>
    )

}

export default Loader;