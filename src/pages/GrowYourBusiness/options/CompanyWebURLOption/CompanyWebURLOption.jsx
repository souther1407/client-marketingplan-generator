import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Input from "../../../../components/atoms/Input/Input";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./companyWebURLOption.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const CompanyWebURLOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleChange = (id, value) => {
    setForm(id, value);
  };
  return (
    <GrowBussinesOption
      numOfPage={11}
      onAnt={() => changeView("CompanyName")}
      onNext={() => form.companyWebURL && changeView("PhoneNumber")}
      renderTitle={() => <Text textAlign="center">Company Website URL?</Text>}
    >
      <div className={styles.container}>
        <Input
          id={"companyWebURL"}
          value={form.companyWebURL}
          onChange={handleChange}
          size="100%"
          onError={() => {}}
        />
      </div>
    </GrowBussinesOption>
  );
};

export default CompanyWebURLOption;
