import React, { Component } from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

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
        const { children, isAuthenticated } = this.props;
        const { Layout } = classes;

        return (
            <div className={Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.thisMenuCloseHandler}
                    isAuthenticated={isAuthenticated}
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
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}
export default connect(mapStateToProps)(Layout);
