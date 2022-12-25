import React, { Component } from 'react';
import styles from "./loginButton.module.css"

class LogInButton extends Component {
    render() { 
        return (
            <button id={styles.loginButton}>Log in</button>
        );
    }
}
 
export default LogInButton;