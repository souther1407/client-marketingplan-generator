import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Input from "../../../../components/atoms/Input/Input";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./companyName.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const CompanyNameOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleChange = (id, value) => {
    setForm(id, value);
  };
  return (
    <GrowBussinesOption
      numOfPage={10}
      onAnt={() => changeView("FirstAndLastName")}
      onNext={() => form.companyName && changeView("CompanyWebURL")}
      renderTitle={() => (
        <Text textAlign="center">What's Your Company Name?</Text>
      )}
    >
      <div className={styles.container}>
        <Input
          id={"companyName"}
          value={form.companyName}
          onChange={handleChange}
          size="100%"
          onError={() => {}}
        />
      </div>
    </GrowBussinesOption>
  );
};

export default CompanyNameOption;
