import React, { Component } from "react";
import classes from './Drawer.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

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
        const { isOpen } = this.props;
        const { Drawer, Close } = classes;
        return (
            <nav className={`${Drawer} ${isOpen ? null : Close} `}>
                <ul>
                    {this.renderLink()}
                </ul>
            </nav>
        )
    }

}

export default Drawer;