import React, { Component } from 'react';
import styles from "./signUpButton.module.css"

class SignUpButtom extends Component {
    handleOnClick() {
        this.props.signUpOnClick()
        const popupContainer = document.getElementById("popupContainer")
        popupContainer.style.display = "flex"
    }
    render() { 
        return (
            <button id={styles.signUpButton} onClick={() => this.handleOnClick()}>Sign Up</button>
        );
    }
}
 
export default SignUpButtom;