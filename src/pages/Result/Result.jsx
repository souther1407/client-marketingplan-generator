import React from "react";
import styles from "./result.module.css";
import Icon from "../../components/atoms/Icon/Icon";
import Link from "../../components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Markdown from "react-markdown";
import Mark from "../../components/atoms/Mark/Mark";
import { usePlansStore } from "../../stores/usePlanStore";
import { useNavigate } from "react-router-dom";
import { GROW_YOUR_BUSINESS } from "../../constants/routes";
const Result = () => {
  const plan = usePlansStore((state) => state.plan);
  const navigate = useNavigate();
  return (
    <div className={styles.result}>
      <nav className={styles.topNav}>
        <div>
          <Text bold color="soft">
            Paddawan
          </Text>
        </div>
        <IconTextButton onClick={() => navigate(GROW_YOUR_BUSINESS)}>
          Scale your Business
        </IconTextButton>
      </nav>
      <nav className={styles.nav}>
        <Text
          bold
          type="title"
          textAlign="center"
          size="1.7rem"
          fontFamily="inter"
        >
          {plan?.product ?? "not found"}
        </Text>
        <div className={styles.strategy}>
          <Text>Facebook Ads</Text>
          <Icon type={"Facebook Ads"} size={"1rem"} />
        </div>
      </nav>
      <main>
        <section className={styles.resultDetail}>
          <Markdown className={styles.resultMarkdown}>
            {plan ? plan.result : "Not plan generate :c"}
          </Markdown>
        </section>
        <section className={styles.growthBussines}>
          <IconTextButton
            size="100%"
            onClick={() => navigate(GROW_YOUR_BUSINESS)}
          >
            Scale your Business
          </IconTextButton>
        </section>
        <section className={styles.extraResources}>
          <Text>Extra resources</Text>
          <div className={styles.videos}>
            <div className={styles.video}>
              <img src="https://i.blogs.es/b44509/youtubealt/1366_2000.jpg" />
              <Text>Meta Ads Setup</Text>
            </div>
            <div className={styles.video}>
              <img src="https://i.blogs.es/b44509/youtubealt/1366_2000.jpg" />
              <Text>Facebook Ads Full-Guide</Text>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Result;
