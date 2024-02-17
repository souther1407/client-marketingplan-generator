import React from "react";
import CardOption from "../../components/CardOption/CardOption";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./whichDescribeOptions.module.css";
const WhichDescribeOption = () => {
  return (
    <GrowBussinesOption
      renderTitle={() => (
        <Text textAlign="center">Which best describes you?</Text>
      )}
    >
      <div className={styles.options}>
        <CardOption icon={"bulb"}>
          <Text>I want an actionable Marketing Plan</Text>
        </CardOption>
        <CardOption icon={"bulb"}>
          <Text>I want an expert on Facebook Ads</Text>
        </CardOption>
      </div>
    </GrowBussinesOption>
  );
};

export default WhichDescribeOption;
