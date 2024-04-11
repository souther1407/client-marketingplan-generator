import React, { useState } from "react";
import styles from "./marketingBudget.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import RadioButton from "../../../../components/atoms/RadioButton/RadioButton";
const MarketingBudget = ({ onNextScreen, onPreviousScreen }) => {
  const [radioBtns, setRadioBtns] = useState({
    small: null,
    medium: null,
    big: null,
    veryBig: null,
  });
  const [marketingBudget, setMarketingBudget] = useState("");

  const handleChange = (id, value) => {
    setMarketingBudget(value);
  };

  return (
    <div className={styles.marketingBudget}>
      <main className={styles.main}>
        <Text fontWeight="bold" size={"2rem"}>
          Which option best describes your monthly marketing budget?
        </Text>
        <div className={styles.form}>
          <Text>Select one</Text>
          <div className={styles.radioButtons}>
            <div
              className={styles.topBorder}
              onClick={() => {
                radioBtns.small.click();
              }}
            >
              <RadioButton
                name={"marketingBudget"}
                label="Small (<$500)"
                id={"small"}
                onInitRef={(ref) => {
                  setRadioBtns((prev) => ({
                    ...prev,
                    small: ref.current,
                  }));
                }}
                onChange={handleChange}
              />
            </div>
            <div
              className={styles.bottomBorder}
              onClick={() => {
                radioBtns.medium.click();
              }}
            >
              <RadioButton
                name={"marketingBudget"}
                id={"medium"}
                onInitRef={(ref) => {
                  setRadioBtns((prev) => ({
                    ...prev,
                    medium: ref.current,
                  }));
                }}
                onChange={handleChange}
                label="Medium ($500 - $2,000)"
              />
            </div>
            <div
              className={styles.bottomBorder}
              onClick={() => {
                radioBtns.big.click();
              }}
            >
              <RadioButton
                name={"marketingBudget"}
                id={"big"}
                onInitRef={(ref) => {
                  setRadioBtns((prev) => ({
                    ...prev,
                    big: ref.current,
                  }));
                }}
                onChange={handleChange}
                label="Big ($2,000 - $10,000)"
              />
            </div>
            <div
              className={styles.bottomBorder}
              onClick={() => {
                radioBtns.veryBig.click();
              }}
            >
              <RadioButton
                name={"marketingBudget"}
                id={"veryBig"}
                onInitRef={(ref) => {
                  setRadioBtns((prev) => ({
                    ...prev,
                    veryBig: ref.current,
                  }));
                }}
                onChange={handleChange}
                label="Very Big ($10,000+)"
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
            <IconTextButton
              size="300px"
              textProps={{ fontWeight: "bold" }}
              onClick={onNextScreen}
            >
              Next
            </IconTextButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketingBudget;
