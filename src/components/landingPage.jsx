import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./landingPage.module.css"
import NavigationBar from "./landingPageComponents/navigationBar";
import CardGroup from "./landingPageComponents/cardGroup";
import LandingPagePhrase from "./landingPageComponents/landingPagePhrase";
import Footer from "./landingPageComponents/footer";

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
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default landingPage;
