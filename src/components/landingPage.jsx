import React, { Component } from "react";
import styles from "./landingPage.module.css"
import NavigationBar from "./navigationBar";
import CardGroup from "./cardGroup";

class landingPage extends Component {
  state = {};
  render() {
    let background = document.getElementById("body")
    console.log(background)
    return (

      <div className={styles.body} id="body">
        <NavigationBar></NavigationBar>
        <CardGroup></CardGroup>
        <div className={styles.test}>
            <p>Hello there</p>
        </div>
      </div>
    );
  }
}

export default landingPage;
