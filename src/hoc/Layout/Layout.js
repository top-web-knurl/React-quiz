import React, { Component } from "react";
import classes from "./Layout.module.css";



class Layout extends Component{

    render() {
        const {children} = this.props;
        const {Layout} = classes;
        return (
            <div className={Layout}>
                <main>
                    {children}
                </main>
            </div>
        );
    }
}

export default Layout;
