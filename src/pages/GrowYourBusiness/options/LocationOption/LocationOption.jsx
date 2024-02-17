import React from "react";
import CardOption from "../../components/CardOption/CardOption";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./locationOption.module.css";

const LocationOption = ({ changeView }) => {
  const handleSelectCountry = (option) => {
    changeView("BussinesType");
  };
  return (
    <GrowBussinesOption
      numOfPage={3}
      onAnt={() => {}}
      onNext={() => {}}
      renderTitle={() => (
        <Text textAlign="center" type="subtitle">
          Where is your business based?
        </Text>
      )}
    >
      <div className={styles.container}>
        <CardOption id={"usa"} icon={"usaFlag"} onClick={handleSelectCountry}>
          <Text>USA</Text>
        </CardOption>
        <CardOption id={"other"} icon={"world"} onClick={handleSelectCountry}>
          <Text>Other</Text>
        </CardOption>
      </div>
    </GrowBussinesOption>
  );
};

export default LocationOption;
