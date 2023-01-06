import React, { Component } from "react";
import "./popup.css";
import { AiOutlineClose } from "react-icons/ai";

class Popup extends Component {
  state = {
    login: this.props.login,
    signUp: this.props.signUp,
  };
  render() {
    return (
      <div className="popupContainer">
        <div className="popupWindow">
          <div className="closeButtonDiv">
            <AiOutlineClose
              className="closeButton"
              style={{ color: "lightgray" }}
            />
          </div>
          <h1 className="header">{this.state.login ? "Login" : "Sign Up"}</h1>
          <div className="emailDiv">
            <input
              className="emailInput"
              type="email"
              name="email"
              placeholder="Email"
            />
            <label className="emailLabel" for="email">
              Email
            </label>
          </div>
          <div className="passwordDiv">
            <input
              className="passwordInput"
              type="password"
              name="password"
              placeholder="Password"
            />
            <label className="passwordLabel" for="password">
              Password
            </label>
          </div>
          <button className="mainButton">
            {this.state.login ? "Login" : "Sign Up"}
          </button>
          <hr className="lineBreak"></hr>
          <p className="alreadyUserParagraph">
            {this.state.login ? "Don't have an account? " : "Already a user? "}{" "}
            <button className="secondaryButton">
              <u>{this.state.login ? "Sign Up" : "Login"}</u>
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Popup;
