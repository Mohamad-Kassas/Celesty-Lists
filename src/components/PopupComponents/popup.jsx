import React, { Component } from "react";
import "./popup.css";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

class Popup extends Component {
  state = {
    login: this.props.login,
    signUp: this.props.signUp,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      login: nextProps.login,
      signUp: nextProps.signUp,
    });
  }

  handleMainButtonClick() {
    const usernameInputField = document.getElementById("usernameInput");
    const passwordInputField = document.getElementById("passwordInput");

    const usernameInput = usernameInputField.value;
    const passwordInput = passwordInputField.value;

    const usernameErrorMessagesDiv = document.getElementById(
      "usernameErrorMessagesDiv"
    );
    const passwordErrorMessagesDiv = document.getElementById(
      "passwordErrorMessagesDiv"
    );

    const usernameErrorMessages = document.getElementById(
      "usernameErrorMessages"
    );
    const passwordErrorMessages = document.getElementById(
      "passwordErrorMessages"
    );

    let errorStatus = false;

    // Default values
    usernameErrorMessagesDiv.style.display = "none";
    passwordErrorMessagesDiv.style.display = "none";

    if (this.state.signUp) {
      if (usernameInput.length < 4 || usernameInput.length > 30) {
        usernameErrorMessages.innerText =
          "Username must be between 4 and 30 characters";
        usernameErrorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (usernameInput === "") {
        usernameErrorMessages.innerText = "Username cannot be empty";
        usernameErrorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (passwordInput.length < 8 || passwordInput.length > 20) {
        passwordErrorMessages.innerText =
          "Password must be between 8 and 20 characters";
        passwordErrorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (passwordInput === "") {
        passwordErrorMessages.innerText = "Password cannot be empty";
        passwordErrorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }
    } else {
      // authentication database code, check that username and password are in db and the user checks out
    }

    if (!errorStatus) {
      // authentication database code
    }
  }

  handleSecondaryButtonClick() {
    this.setState({
      login: !this.state.login,
      signUp: !this.state.signUp,
    });
  }

  handleExitButtonClick() {
    const popupContainer = document.getElementById("popupContainer");

    popupContainer.style.display = "none";
  }

  render() {
    return (
      <div className="popupContainer" id="popupContainer">
        <div className="popupWindow">
          <div
            className="closeButtonDiv"
            onClick={() => this.handleExitButtonClick()}
          >
            <AiOutlineClose
              className="closeButton"
              style={{ color: "lightgray" }}
            />
          </div>
          <h1 className="header">{this.state.login ? "Login" : "Sign Up"}</h1>
          <div className="usernameDiv">
            <input
              className="usernameInput"
              id="usernameInput"
              type="username"
              name="username"
              placeholder="username"
            />
            <label className="usernameLabel" htmlFor="username">
              Username
            </label>
            <div
              className="usernameErrorMessagesDiv"
              id="usernameErrorMessagesDiv"
            >
              <RiErrorWarningFill className="errorIcon" />
              <p className="usernameErrorMessages" id="usernameErrorMessages">
                {" "}
                Hello world
              </p>
            </div>
          </div>
          <div className="passwordDiv">
            <input
              className="passwordInput"
              id="passwordInput"
              type="password"
              name="password"
              placeholder="Password"
            />
            <label className="passwordLabel" htmlFor="password">
              Password
            </label>
            <div
              className="passwordErrorMessagesDiv"
              id="passwordErrorMessagesDiv"
            >
              <RiErrorWarningFill className="errorIcon" />

              <p className="passwordErrorMessages" id="passwordErrorMessages">
                {" "}
                Hello world
              </p>
            </div>
          </div>
          <button
            className="mainButton"
            onClick={() => this.handleMainButtonClick()}
          >
            {this.state.login ? "Login" : "Sign Up"}
          </button>

          <hr className="lineBreak"></hr>
          <p className="alreadyUserParagraph">
            {this.state.login ? "Don't have an account? " : "Already a user? "}{" "}
            <button
              className="secondaryButton"
              id="secondaryButton"
              onClick={() => this.handleSecondaryButtonClick()}
            >
              <u>{this.state.login ? "Sign Up" : "Login"}</u>
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Popup;
