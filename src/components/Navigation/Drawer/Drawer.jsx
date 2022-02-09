import React, { Component } from "react";
import classes from './Drawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    1, 2, 3
]
class Drawer extends Component {

    renderLink() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href={link}>TestLink{index}</a>
                </li>
            )
        })
    }

    render() {
        const { isOpen, onClose } = this.props;
        const { Drawer, Close } = classes;
        return (
            <>
                {isOpen ? <Backdrop onClick={onClose} /> : null}
                <nav className={`${Drawer} ${isOpen ? null : Close} `}>
                <ul>
                    {this.renderLink()}
                </ul>
            </nav>
            </>
           
        )
    }

}

export default Drawer;