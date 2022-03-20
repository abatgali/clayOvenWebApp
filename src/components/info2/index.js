import React from "react";
import styles from "./styles.module.css";
const Info2 = ({ image, title, info, background, color }) => {
  return (
    <div
      className={styles.info}
      style={{
        color,
        background,
      }}
    >
      <img src={image} alt="" className={styles.info__image} />
      <div className={styles.info__text}>
        <h4>{title}</h4>
        <h6>{info}</h6>
      </div>
    </div>
  );
};

export default Info2;
