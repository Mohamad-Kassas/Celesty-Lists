import React, { Component } from "react";
import styles from "./landingPage.module.css"
import NavigationBar from "./navigationBar";
import CardGroup from "./cardGroup";
import LandingPagePhrase from "./landingPagePhrase";

class landingPage extends Component {
  state = {};
  render() {
    let background = document.getElementById("body")
    console.log(background)
    return (
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <LandingPagePhrase></LandingPagePhrase>
        <CardGroup></CardGroup>
        <div className={styles.test}>
            <p>Hello there</p>
        </div>
      </React.Fragment>
    );
  }
}

export default landingPage;
