import React from "react";
import styles from "./styles.module.css";
const Heading = ({ heading }) => {
  return <h1 className={styles.heading}>{heading}</h1>;
};

export default Heading;
