import React, { Component } from 'react';
import styles from "./cardGroup.module.css"

class cardGroup extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.cardGroupHolder}>
                <div className={styles.cardGroup}>
                    <div className={styles.littleCard}></div>
                    <div className={styles.bigCard}></div>
                    <div className={styles.littleCard}></div>
                    <div className={styles.bigCard}></div>
                    <div className={styles.littleCard}></div>
                    <div className={styles.bigCard}></div>
                    <div className={styles.littleCard}></div>
                    <div className={styles.bigCard}></div>
                </div>
            </div>
        );
    }
}
 
export default cardGroup;