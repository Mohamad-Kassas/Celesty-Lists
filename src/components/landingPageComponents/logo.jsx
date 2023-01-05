import React, { Component } from 'react';
import logo from "../../images/Final Logo Orange.png"
import styles from "./logo.module.css"

class Logo extends Component {
    render() { 
        return (
            <img src={logo} alt="Logo" id={styles.logo}/>
        );
    }
}
 
export default Logo;