import React, { useState } from "react";
import styles from "./selectProduct.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Mark from "../../../../components/atoms/Mark/Mark";
import Icon from "../../../../components/atoms/Icon/Icon";
import Input from "../../../../components/atoms/Input/Input";
import IconButton from "../../../../components/molecules/IconButton/IconButton";
const SelectProduct = () => {
  const [product, setProduct] = useState({
    description: "",
    price: "",
  });

  const handleChange = (id, value) => {
    setProduct((prev) => ({ ...prev, [id]: value }));
  };

  const handleSetDesc = (desc, value) => {
    setProduct({ description: desc, price: value });
  };
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
              variant="plain"
              onChange={handleChange}
              onError={(id, value) => {}}
              id={"description"}
              value={product.description}
              label="Product Description"
              placeholder="Ex: Makeup"
            />
            <div className={styles.division}></div>
            <Input
              variant="plain"
              type="number"
              onChange={handleChange}
              value={product.price}
              onError={(id, value) => {}}
              id={"price"}
              label="Selling price"
              placeholder="Ex: 90"
            />
          </div>

          <Text>Please enter a valid product description.</Text>
        </div>
        <div className={styles.examples}>
          <Text>Examples:</Text>
          <div className={styles.icons}>
            <div
              className={styles.icon}
              onClick={() => handleSetDesc("Makeup", "60")}
            >
              <Icon type={"makeup"} size={"7rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Makeup
              </Text>
              <div className={styles.priceTag}>
                <Text fontWeight="300" size={"0.78rem"} color="success">
                  $60
                </Text>
              </div>
            </div>
            <div
              className={styles.icon}
              onClick={() => handleSetDesc("Sunscreen", "36")}
            >
              <Icon type={"sunscreen"} size={"7rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Sunscreen
              </Text>
              <div className={styles.priceTag}>
                <Text fontWeight="300" size={"0.78rem"} color="success">
                  $36
                </Text>
              </div>
            </div>
            <div
              className={styles.icon}
              onClick={() => handleSetDesc("Moisturizer", "35")}
            >
              <Icon type={"moisturizer"} size={"7rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Moisturizer
              </Text>
              <div className={styles.priceTag}>
                <Text fontWeight="300" size={"0.78rem"} color="success">
                  $35
                </Text>
              </div>
            </div>
            <div
              className={styles.icon}
              onClick={() => handleSetDesc("Lipstick", "56")}
            >
              <Icon type={"lipstick"} size={"7rem"} />
              <Text fontWeight="300" size={"0.78rem"}>
                Lipstick
              </Text>
              <div className={styles.priceTag}>
                <Text fontWeight="300" size={"0.78rem"} color="success">
                  $56
                </Text>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectProduct;
