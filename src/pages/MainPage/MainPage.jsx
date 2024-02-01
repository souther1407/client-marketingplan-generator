import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./mainPage.module.css";
import Slider from "../../components/atoms/Slider/Slider";
const MainPage = () => {
  const [input, setInput] = useState({
    idea: "",
    budget: 5000,
  });

  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.mainPage}>
      <Text type="title">Paddawan</Text>
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
            onChange={handleChange}
            onError={() => {}}
            placeholder="Type your product/service here."
          />
          <div className={styles.budgetSlider}>
            <section>
              <Text>Budget</Text>
              <Text>${input.budget}</Text>
            </section>
            <Slider
              id="budget"
              onChange={handleChange}
              value={input.budget}
              min={10}
              max={10000}
            />
          </div>
        </main>
        <footer>
          <Text color="inherit">Create marketing plan</Text>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
