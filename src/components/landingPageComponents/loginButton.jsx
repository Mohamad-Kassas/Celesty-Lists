import React, { Component } from "react";
import styles from "./loginButton.module.css";

class LogInButton extends Component {
  handleOnClick() {
    this.props.loginOnClick();
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";
  }
  render() {
    return (
      <button id={styles.loginButton} onClick={() => this.handleOnClick()}>
        Log in
      </button>
    );
  }
}

export default LogInButton;
