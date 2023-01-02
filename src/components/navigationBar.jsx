import React, { Component } from 'react';
import "./navigationBar.css"
import Logo from "./logo"
import LoginButton from "./loginButton"
import SignUpButton from "./signUpButton"

class NavigationBar extends Component {
    state = {
        scrollStatus: "NoScroll"
    }
    updateScrollStatus() {
        let result = window.pageYOffset <= 10 ? "NoScroll" : "Scrolled"

        console.log(result)
        this.setState({scrollStatus: result})
    }
    render() { 
        window.addEventListener("scroll", this.updateScrollStatus())
        return (
            <div className={"navigationBar" + this.state.scrollStatus}>
                <Logo/>
                <div className="buttons">
                <LoginButton/>
                <SignUpButton/>
                </div>
            </div>
        );
    }
}
 
export default NavigationBar;