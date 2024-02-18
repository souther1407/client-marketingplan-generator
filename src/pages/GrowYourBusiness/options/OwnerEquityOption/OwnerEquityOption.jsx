import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./ownerEquityOption.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const OwnerEquityOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleClickYes = () => {
    setForm("ownerEquility", true);
    changeView("FirstAndLastName");
  };
  const handleClickNo = () => {
    setForm("ownerEquility", false);
    changeView("FirstAndLastName");
  };
  return (
    <GrowBussinesOption
      numOfPage={8}
      onAnt={() => changeView("ProfitLast3")}
      onNext={() => form.ownerEquility && changeView("FirstAndLastName")}
      renderTitle={() => (
        <Text textAlign="center">
          Are you a full or part owner of the company and can you decide how to
          allocate equity?
        </Text>
      )}
    >
      <div className={styles.container}>
        <IconTextButton
          colorVariant="secondary"
          variant="bordered"
          onClick={handleClickYes}
          size="300px"
        >
          YES
        </IconTextButton>
        <IconTextButton
          colorVariant="secondary"
          variant="bordered"
          onClick={handleClickNo}
          size="300px"
        >
          NO
        </IconTextButton>
      </div>
    </GrowBussinesOption>
  );
};

export default OwnerEquityOption;
