import React, { Component } from "react";
import classes from './Drawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const { active } = classes;

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose();
    }
    renderLink(links) {
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
        const { isOpen, onClose, isAuthenticated } = this.props;
        const { Drawer, Close } = classes;
        const links = [
            { to: '/', label: 'Список' },
        ];
        if(isAuthenticated){
            links.push(
                { to: '/quiz-creator', label: 'Создать тест' },
                { to: '/logout', label: 'Выйти' },
            )
        }else{
            links.push(
                { to: '/auth', label: 'Авторизация' },
            )
        }
        return (
            <>
                {isOpen ? <Backdrop onClick={onClose} /> : null}
                <nav className={`${Drawer} ${!isOpen ? Close : ''} `}>
                    <ul>
                        {this.renderLink(links)}
                    </ul>
                </nav>
            </>

        )
    }

}

export default Drawer;