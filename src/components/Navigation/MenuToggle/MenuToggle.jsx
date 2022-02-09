import React from "react";
import classes from './MenuToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const MenuToggle = props => {
    const { onToggle, isOpen } = props;
    const { MenuToggle, openCls } = classes;

    return (
         <FontAwesomeIcon
         className={`${MenuToggle} ${isOpen ? openCls : null}`}
         icon={isOpen ? faTimes : faBars}
         onClick={onToggle}
         size="lg"
     />
    )

}

export default MenuToggle;