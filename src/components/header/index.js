import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = ({ menuPage }) => {
  return (
    <div className={`${styles.header} ${menuPage && styles.header__menuPage}`}>
      <div className={styles.header__left}>
        <a className={styles.header__logo} to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="starbucks logo"
          />
        </a>
        <a to="/menu" className={styles.header__link}>
          Menu
        </a>
        <a
          className={styles.header__link}
          to={{ pathname: "https://andrewirorere.tech/" }}
          target="_blank"
        >
          Rewards
        </a>
        <a className={styles.header__link} to="/menu">
          Gift Cards
        </a>
      </div>
    </div>
  );
};

export default Header;
