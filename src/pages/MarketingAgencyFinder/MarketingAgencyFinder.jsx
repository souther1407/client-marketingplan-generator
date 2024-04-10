import React, { useEffect, useState } from "react";
import styles from "./marketingAgencyFinder.module.css";
import SelectProduct from "./components/SelectProduct/SelectProduct";
import BussinesModel from "./components/BussinesModel/BussinesModel";
import SellingPrice from "./components/SellingPrice/SellingPrice";
import ProductCost from "./components/ProductCost/ProductCost";
const SCREENS = {
  selectProduct: {
    next: "bussinesModel",
    previous: "",
  },
  bussinesModel: {
    next: "sellingPrice",
    previous: "selectProduct",
  },
  sellingPrice: {
    next: "productCost",
    previous: "bussinesModel",
  },
  productCost: {
    next: "",
    previous: "sellingPrice",
  },
};

const MarketingAgencyFinder = () => {
  const [currentScreen, setCurrentScreen] = useState("selectProduct");

  const nextScreen = () => {
    setCurrentScreen(SCREENS[currentScreen].next);
  };
  const previousScreen = () => {
    setCurrentScreen(SCREENS[currentScreen].previous);
  };
  return (
    <div className={styles.marketingAgencyFinder}>
      {currentScreen === "selectProduct" && (
        <div className={styles.screen}>
          <SelectProduct onNextScreen={nextScreen} />
        </div>
      )}
      {currentScreen === "bussinesModel" && (
        <div className={styles.screen}>
          <BussinesModel
            onNextScreen={nextScreen}
            onPreviousScreen={previousScreen}
          />
        </div>
      )}
      {currentScreen === "sellingPrice" && (
        <div className={styles.screen}>
          <SellingPrice
            onNextScreen={nextScreen}
            onPreviousScreen={previousScreen}
          />
        </div>
      )}
      {currentScreen === "productCost" && (
        <div className={styles.screen}>
          <ProductCost
            onNextScreen={nextScreen}
            onPreviousScreen={previousScreen}
          />
        </div>
      )}
    </div>
  );
};

export default MarketingAgencyFinder;
