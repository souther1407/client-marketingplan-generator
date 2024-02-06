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
        <IconTextButton colorVariant="secondary">
          Scale your Business
        </IconTextButton>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.semicircle}>
          <Icon size={"2.5rem"} type={plan?.strategy ?? ""} />
        </div>
        <section className={styles.setup}>
          <Text
            bold
            type="title"
            textAlign="center"
            size="1.7rem"
            fontFamily="inter"
          >
            Optimal Marketing Plan:&nbsp;{" "}
            <Mark>{plan?.product ?? "not found"}</Mark>
          </Text>
          <Text bold fontFamily="inter">
            Set-Up Requirements
          </Text>
          <div className={styles.tutorials}>
            <Link to={"#"}>
              <div className={styles.link}>
                <img src="https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png" />
                <Text fontFamily="inter">Create a Facebook Page</Text>
              </div>
            </Link>
            <Link to={"#"}>
              <div className={styles.link}>
                <img src="https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png" />
                <Text fontFamily="inter">Meta Ads Manage</Text>
              </div>
            </Link>
            <Link to={"#"}>
              <div className={styles.link}>
                <img src="https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png" />
                <Text fontFamily="inter">Google Profile</Text>
              </div>
            </Link>
          </div>
        </section>
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
            colorVariant="secondary"
            onClick={() => navigate(GROW_YOUR_BUSINESS)}
          >
            Scale your Business
          </IconTextButton>
        </section>
      </main>
    </div>
  );
};

export default Result;
