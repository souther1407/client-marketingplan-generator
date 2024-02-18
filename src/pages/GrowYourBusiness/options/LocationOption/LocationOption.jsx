import React from "react";
import CardOption from "../../components/CardOption/CardOption";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./locationOption.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const LocationOption = ({ changeView }) => {
  const handleSelectCountry = (option) => {
    setForm("location", option);
    changeView("BussinesType");
  };
  const { setForm, form } = useGrowFormStore((state) => state);
  return (
    <GrowBussinesOption
      numOfPage={3}
      onAnt={() => changeView("Owner")}
      onNext={() => form.location && changeView("BussinesType")}
      renderTitle={() => (
        <Text textAlign="center" type="subtitle">
          Where is your business based?
        </Text>
      )}
    >
      <div className={styles.container}>
        <CardOption
          id={"usa"}
          icon={"usaFlag"}
          onClick={handleSelectCountry}
          marked={form.location === "usa"}
        >
          <Text>USA</Text>
        </CardOption>
        <CardOption
          id={"other"}
          icon={"world"}
          onClick={handleSelectCountry}
          marked={form.location === "other"}
        >
          <Text>Other</Text>
        </CardOption>
      </div>
    </GrowBussinesOption>
  );
};

export default LocationOption;
