import React, { useEffect, useState } from "react";
import styles from "./marketingAgencyFinder.module.css";
import SelectProduct from "./components/SelectProduct/SelectProduct";
import BussinesModel from "./components/BussinesModel/BussinesModel";

const SCREENS = {
  selectProduct: {
    next: "bussinesModel",
    previous: "",
  },
  bussinesModel: {
    next: "",
    previous: "selectProduct",
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
    </div>
  );
};

export default MarketingAgencyFinder;
