import React, { useEffect, useRef, useState } from "react";
import styles from "./radioButton.module.css";

const RadioButton = ({
  id,
  name,
  onChange,
  onInitRef,
  label = "",
  ...otherProps
}) => {
  const ref = useRef(null);
  const handleCheck = (e) => {
    onChange(id, e.target.value);
  };
  useEffect(() => {
    if (ref.current !== null) onInitRef(ref);
  }, [ref.current]);
  return (
    <div className={styles.radioContainer}>
      <div className={styles.radio}>
        <input
          type="radio"
          ref={ref}
          name={name}
          id={id}
          value={id}
          onChange={handleCheck}
          className={styles.radioInput}
          {...otherProps}
        />
        <div className={styles.checked}></div>
      </div>
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default RadioButton;
