import React, { Component } from 'react';
import styles from "./signUpButton.module.css"

class SignUpButtom extends Component {
    render() { 
        return (
            <button id={styles.signUpButton}>Get Started</button>
        );
    }
}
 
export default SignUpButtom;