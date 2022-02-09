import React, { Component } from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    thisMenuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render() {
        const { children } = this.props;
        const { Layout } = classes;

        return (
            <div className={Layout}>
                <Drawer 
                isOpen={this.state.menu}
                onClose={this.thisMenuCloseHandler}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {children}
                </main>
            </div>
        );
    }
}

export default Layout;
