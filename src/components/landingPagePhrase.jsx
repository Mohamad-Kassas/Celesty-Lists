import React, { Component } from "react";
import styles from "./landingPagePhrase.module.css";
import celestyCloud from "../images/celestyCloud.png";

class landingPagePhrase extends Component {
  state = {};
  render() {
    return (
      <div className={styles.landingPagePhraseHolder}>
        <h1 className={styles.landingPagePhraseHeader}>
          <span className={styles.landingPagePhraseSpan}>Let Celesty Align The Stars For You!</span>
        </h1>
        <img
          className={styles.celestyCloudImage}
          src={celestyCloud}
          alt="Celesty Cloud"
        />

        {/* <h1 className={styles.landingPagePhrase}>The Stars For You!</h1> */}
      </div>
    );
  }
}

export default landingPagePhrase;
