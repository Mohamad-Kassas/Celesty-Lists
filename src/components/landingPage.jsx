import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./landingPage.module.css";
import NavigationBar from "./landingPageComponents/navigationBar";
import CardGroup from "./landingPageComponents/cardGroup";
import LandingPagePhrase from "./landingPageComponents/landingPagePhrase";
import Footer from "./landingPageComponents/footer";
import Popup from "./PopupComponents/popup";

class landingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: this.props.login,
      signUp: this.props.signUp,
    };

    this.handleLoginOnClick = this.handleLoginOnClick.bind(this)
    this.handleSignUpOnClick = this.handleSignUpOnClick.bind(this)
  }

  handleLoginOnClick() {
    this.setState({
      login: true,
      signUp: false,
    });
  };

  handleSignUpOnClick() {
    this.setState({
      login: false,
      signUp: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Popup login={this.state.login} signUp={this.state.signUp}></Popup>
        <NavigationBar
          loginOnClick={this.handleLoginOnClick}
          signUpOnClick={this.handleSignUpOnClick}
        ></NavigationBar>
        <LandingPagePhrase></LandingPagePhrase>
        <CardGroup></CardGroup>
        <Footer getStartedOnClick={this.handleSignUpOnClick}></Footer>
      </React.Fragment>
    );
  }
}

export default landingPage;
