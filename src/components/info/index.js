import React from "react";
import styles from "./styles.module.css";

const Info = ({
  image,
  title,
  info,
  link,
  background,
  color,
  path,
  className,
}) => {
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
        <a to={path} style={{ color }} className={className}>
          {link}
        </a>
      </div>
    </div>
  );
};

export default Info;
