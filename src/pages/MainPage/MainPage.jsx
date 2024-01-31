import React from "react";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./mainPage.module.css";
import Slider from "../../components/atoms/Slider/Slider";
const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <main>
          <div>
            <Text textAlign="center">
              Please describe your product/service in 1- 2 sentences MAX.
            </Text>
            <Text textAlign="center" size={"0.78rem"} color="soft">
              Ex: Vegan Protein Bar
            </Text>
          </div>
          <Input
            id={"idea"}
            onChange={() => {}}
            onError={() => {}}
            placeholder="Type your product/service here."
          />
          <Slider />
        </main>
        <footer>
          <Text color="inherit">Create marketing plan</Text>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
