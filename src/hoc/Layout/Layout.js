import React, { Component } from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle";


class Layout extends Component{
    state = {
        menu:false
    }
  
    toggleMenuHandler= () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        const {children} = this.props;
        const {Layout} = classes;

        return (
            <div className={Layout}>
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
