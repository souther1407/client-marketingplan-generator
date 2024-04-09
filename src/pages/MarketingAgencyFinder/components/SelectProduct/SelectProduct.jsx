import React from "react";
import styles from "./selectProduct.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Mark from "../../../../components/atoms/Mark/Mark";
import Icon from "../../../../components/atoms/Icon/Icon";
import Input from "../../../../components/atoms/Input/Input";
import IconButton from "../../../../components/molecules/IconButton/IconButton";
const SelectProduct = ({ onPreviousScreen, onNextScreen }) => {
  return (
    <div className={styles.selectProduct}>
      <main className={styles.main}>
        <div className={styles.title}>
          <Text size={"3.2rem"} fontWeight="bold" textAlign="center">
            Find the perfect <Mark color="primary">marketing agency</Mark>
          </Text>
          <Text size={"3.2rem"} fontWeight="bold" textAlign="center">
            for your <Mark color="primary">beauty product</Mark>
          </Text>
        </div>
        <div className={styles.productInput}>
          <div className={styles.input}>
            <Input
              variant="secondary"
              onChange={(id, value) => {}}
              onError={(id, value) => {}}
              id={"input"}
              label="Product Description"
              placeholder="Ex: Makeup"
            />
            <IconButton
              size="2rem"
              icon="singleArrowRight"
              onClick={onNextScreen}
            />
          </div>

          <Text color="primary">Please enter a valid product description.</Text>
        </div>
        <div className={styles.examples}>
          <Text>Examples:</Text>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Icon type={"makeup"} size={"8rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Makeup
              </Text>
            </div>
            <div className={styles.icon}>
              <Icon type={"sunscreen"} size={"8rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Sunscreen
              </Text>
            </div>
            <div className={styles.icon}>
              <Icon type={"moisturizer"} size={"8rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Moisturizer
              </Text>
            </div>
            <div className={styles.icon}>
              <Icon type={"lipstick"} size={"8rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Lipstick
              </Text>
            </div>
            <div className={styles.icon}>
              <Icon type={"fragance"} size={"8rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Fragance
              </Text>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectProduct;
