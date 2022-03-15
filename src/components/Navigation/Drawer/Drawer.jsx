import React, { Component } from "react";
import classes from './Drawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";
const links = [
    { to: '/', label: 'Список' },
    { to: '/auth', label: 'Авторизация' },
    { to: '/quiz-creator', label: 'Создать тест' },
]
const { active } = classes;

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose();
    }
    renderLink() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => isActive ? active : null}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
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
                <nav className={`${Drawer} ${!isOpen ? Close : ''} `}>
                    <ul>
                        {this.renderLink()}
                    </ul>
                </nav>
            </>

        )
    }

}

export default Drawer;