import React, { Component } from "react";
import styles from "./footerButton.module.css";

class footerButton extends Component {
  handleClick() {
    this.props.getStartedOnClick();
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";
  }

  render() {
    return (
      <button className={styles.footerButton} onClick={() => {this.handleClick()}}>
        Get Started
      </button>
    );
  }
}

export default footerButton;
