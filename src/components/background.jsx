import React, { Component } from 'react';
import styles from "./background.module.css"
import backgroundImage from "../images/spaceBackground3.png"

class background extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <img src={backgroundImage} className={styles.background} alt="Hello there"/>
            </React.Fragment>
        );
    }
}
 
export default background;