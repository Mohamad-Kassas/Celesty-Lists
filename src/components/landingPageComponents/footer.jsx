import React, { Component } from "react";
import GoogleSignUpButton from "./googleSignUpButton";
import styles from "./footer.module.css";
import celestyDesk from "../../images/celestyDesk.png";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import {DiCss3} from "react-icons/di"

class footer extends Component {
  render() {
    return (
      <div className={styles.footerHolder}>
        <div className={styles.leftHalfDiv}>
          <span className={styles.footerHeader}>
            Start using CelestyLists today:
          </span>
          <GoogleSignUpButton></GoogleSignUpButton>
          <span className={styles.websiteCreatedWith}>
            Website created using <FaReact /> <IoLogoJavascript />{" "}
            <AiFillHtml5 />
            <DiCss3/>
          </span>
        </div>
        <img
          className={styles.rightHalfImage}
          src={celestyDesk}
          alt="Celesty Desk"
        />
      </div>
    );
  }
}

export default footer;
