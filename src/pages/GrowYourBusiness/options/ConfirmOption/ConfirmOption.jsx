import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./confirmOption.module.css";
const ConfirmOption = ({ changeView }) => {
  const handleClickYes = () => {};
  const handleClickNo = () => {};
  return (
    <GrowBussinesOption
      numOfPage={14}
      onAnt={() => changeView("Email")}
      final={true}
      onNext={() => {}}
      renderTitle={() => (
        <Text textAlign="center">
          Do you want a free 15 minutes consultation with an Agency specialized
          in Facebook Ads? If not, please select "NO" and we will remove your
          company from consideration and only add you to our email list. CLICK
          THEN HIT SUBMIT
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
          Yes, I want it
        </IconTextButton>
        <IconTextButton
          colorVariant="secondary"
          variant="bordered"
          onClick={handleClickNo}
          size="300px"
        >
          No, thank you
        </IconTextButton>
      </div>
    </GrowBussinesOption>
  );
};

export default ConfirmOption;
