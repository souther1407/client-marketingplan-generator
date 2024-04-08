import React, { useState } from "react";
import styles from "./bussinesModel.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import RadioButton from "../../../../components/atoms/RadioButton/RadioButton";
const BussinesModel = ({ onNextScreen, onPreviousScreen }) => {
  const [radioBtns, setRadioBtns] = useState({
    privateRadioButton: null,
    dropshippingRadioButton: null,
  });
  const [bussinesType, setBussinesType] = useState("");

  const handleChange = (id, value) => {
    setBussinesType(value);
  };
  return (
    <div className={styles.bussinesModel}>
      <main className={styles.main}>
        <Text fontWeight="bold" size={"2rem"}>
          Which business model best describes yours?
        </Text>
        <div className={styles.form}>
          <Text>Select one</Text>
          <div className={styles.radioButtons}>
            <div
              className={styles.topBorder}
              onClick={() => {
                radioBtns.privateRadioButton.click();
              }}
            >
              <RadioButton
                name={"bussinesModel"}
                label="Private Label: Own Website (B2C)"
                id={"private"}
                onInitRef={(ref) => {
                  setRadioBtns((prev) => ({
                    ...prev,
                    privateRadioButton: ref.current,
                  }));
                }}
                onChange={handleChange}
              />
            </div>
            <div
              className={styles.bottomBorder}
              onClick={() => {
                radioBtns.dropshippingRadioButton.click();
              }}
            >
              <RadioButton
                name={"bussinesModel"}
                id={"dropshipping"}
                onInitRef={(ref) => {
                  setRadioBtns((prev) => ({
                    ...prev,
                    dropshippingRadioButton: ref.current,
                  }));
                }}
                onChange={handleChange}
                label="Dropshipping: Own Website (B2C)"
              />
            </div>
          </div>
          <div className={styles.button}>
            <IconTextButton
              variant="bordered"
              size="300px"
              textProps={{ fontWeight: "bold" }}
              onClick={onPreviousScreen}
            >
              Previous
            </IconTextButton>
            <IconTextButton size="300px" textProps={{ fontWeight: "bold" }}>
              Next
            </IconTextButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BussinesModel;
