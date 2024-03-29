import React from "react";
import styles from "./input.module.css";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
const Input = ({
  id,
  onChange,
  onError,
  variant = "primary",
  label = "",
  errorValue = "",
  icon,
  size = "100%",
  validators = [],
  ...otherProps
}) => {
  const handleChange = (e) => {
    handleError(e.target.value);
    onChange(id, e.target.value);
  };

  const handleError = (value) => {
    let error = "";
    for (const validator of validators) {
      console.log("itero");
      error = validator(value);
      if (error) break;
    }
    onError(id, error);
  };

  return (
    <div
      className={`${styles[variant]} ${styles.container} ${
        errorValue ? styles.error : ""
      }`}
    >
      {icon && (
        <div className={styles.icon}>
          <Icon type={icon} size={"1.4rem"} />
        </div>
      )}
      {label && <Text size={"0.77rem"}>{label}</Text>}
      <input
        style={{ width: size }}
        className={styles.input}
        id={id}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
