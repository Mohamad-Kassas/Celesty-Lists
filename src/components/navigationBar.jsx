import React, { Component } from 'react';
import styles from "./navigationBar.module.css"
import Logo from "./logo"
import LoginButton from "./loginButton"
import SignUpButton from "./signUpButton"

class NavigationBar extends Component {
    render() { 
        return (
            <div id={styles.navigationBar}>
                <Logo/>
                <div id={styles.buttons}>
                <LoginButton/>
                <SignUpButton/>
                </div>
            </div>
        );
    }
}
 
export default NavigationBar;