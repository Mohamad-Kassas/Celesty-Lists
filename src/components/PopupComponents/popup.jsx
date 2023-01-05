import React, { Component } from "react";
import styles from "./popup.module.css";

class Popup extends Component {
  render() {
    return (
      <div className={styles.popupContainer}>
        <div className={styles.popupWindow}></div>
      </div>
    );
  }
}

export default Popup;
