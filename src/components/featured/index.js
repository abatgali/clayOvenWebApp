import React from "react";
import styles from "./styles.module.css";

const Featured = ({
  title,
  info,
  link,
  path,
  image,
  order,
  background,
  color,
  className,
}) => {
  return (
    <div className={styles.featured} style={{ background }}>
      <div className={styles.featured__left} style={{ order, color }}>
        <h1>{title}</h1>
        <h4>{info}</h4>
        <a to={path} className={className}>
          {link}
        </a>
      </div>
      <div className={styles.featured__right}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Featured;
