import React from "react";
import styles from "./text.module.css";

const Text = ({
  type = "text",
  bold,
  color = "standard",
  children,
  size,
  textAlign = "start",
  fontFamily = "inherit",
  ...otherProps
}) => {
  if (type === "title") {
    return (
      <h1
        className={`${styles.title} ${styles[color]} ${bold && styles.bold}`}
        style={{ textAlign, fontSize: size ?? "", fontFamily }}
        {...otherProps}
      >
        {children}
      </h1>
    );
  } else if (type === "subtitle") {
    return (
      <h3
        className={`${styles.subtitle} ${styles[color]} ${bold && styles.bold}`}
        style={{ textAlign, fontSize: size ?? "", fontFamily }}
        {...otherProps}
      >
        {children}
      </h3>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} ${bold && styles.bold}`}
      style={{ textAlign, fontSize: size ?? "", fontFamily }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
