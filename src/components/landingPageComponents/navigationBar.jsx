import React, { Component } from 'react';
import "./navigationBar.css"
import Logo from "./logo"
import LoginButton from "./loginButton"
import SignUpButton from "./signUpButton"

class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            scrollStatus: "NoScroll"
        }

        this.updateScrollStatus = this.updateScrollStatus.bind(this)
    }
    
    updateScrollStatus() {
        let result = window.pageYOffset <= 10 ? "NoScroll" : "Scrolled"

        this.setState({scrollStatus: result})
    }

    componentDidMount() {
        document.addEventListener("scroll", this.updateScrollStatus)
    }

    render() { 
        return (
            <div className={"navigationBar" + this.state.scrollStatus}>
                <Logo/>
                <div className="buttons">
                <LoginButton loginOnClick={this.props.loginOnClick}/>
                <SignUpButton signUpOnClick={this.props.signUpOnClick}/>
                </div>
            </div>
        );
    }
}
 
export default NavigationBar;