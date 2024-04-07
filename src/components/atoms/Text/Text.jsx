import React from "react";
import styles from "./text.module.css";

const Text = ({
  type = "text",
  color = "standard",
  children,
  size,
  textAlign = "start",
  fontFamily = "inherit",
  fontWeight = "400",
  ...otherProps
}) => {
  if (type === "title") {
    return (
      <h1
        className={`${styles.title} ${styles[color]}`}
        style={{ textAlign, fontSize: size ?? "", fontFamily, fontWeight }}
        {...otherProps}
      >
        {children}
      </h1>
    );
  } else if (type === "subtitle") {
    return (
      <h3
        className={`${styles.subtitle} ${styles[color]} `}
        style={{ textAlign, fontSize: size ?? "", fontFamily, fontWeight }}
        {...otherProps}
      >
        {children}
      </h3>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} `}
      style={{ textAlign, fontSize: size ?? "", fontFamily, fontWeight }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
