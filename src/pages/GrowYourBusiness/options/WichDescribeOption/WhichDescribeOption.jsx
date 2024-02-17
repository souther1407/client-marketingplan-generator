import React from "react";
import CardOption from "../../components/CardOption/CardOption";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./whichDescribeOptions.module.css";
const WhichDescribeOption = ({ changeView }) => {
  const handleSelectOption = (option) => {
    if (option === "expert") changeView("Owner");
  };
  return (
    <GrowBussinesOption
      numOfPage={1}
      onAnt={() => {}}
      onNext={() => {}}
      renderTitle={() => (
        <Text textAlign="center">Which best describes you?</Text>
      )}
    >
      <div className={styles.options}>
        <CardOption id={"ia"} icon={"bulb"} onClick={handleSelectOption}>
          <Text size={"0.77rem"}>I want an actionable Marketing Plan</Text>
        </CardOption>
        <CardOption id={"expert"} icon={"bulb"} onClick={handleSelectOption}>
          <Text size={"0.77rem"}>I want an expert on Facebook Ads</Text>
        </CardOption>
      </div>
    </GrowBussinesOption>
  );
};

export default WhichDescribeOption;
