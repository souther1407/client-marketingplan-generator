import React, { useEffect } from "react";
import styles from "./login.module.css";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Icon from "../../components/atoms/Icon/Icon";
import LogoNav from "../../components/organisms/LogoNav";
import { auth } from "../../services/login/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../constants/routes";
import { useLoginUser } from "../../stores/useLoginUser";
const Login = () => {
  const navigate = useNavigate();
  const credentials = useLoginUser((state) => state.credentials);
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const user = await signInWithPopup(auth, provider);
      navigate(MAIN, { replace: true });
    } catch (error) {
      alert("Error, please try again");
    }
  };
  if (credentials) {
    navigate(MAIN);
  }
  return (
    <div className={styles.login}>
      <LogoNav />
      <main className={styles.main}>
        <Text size={"2rem"}>Scale your Ecommerce Operations!</Text>
        <div className={styles.form}>
          <div className={styles.input}>
            <Text>Email</Text>
            <Input
              id={"email"}
              variant="secondary"
              onChange={() => {}}
              onError={() => {}}
            />
          </div>
          <div className={styles.input}>
            <Text>Password</Text>
            <Input
              id={"password"}
              type="password"
              variant="secondary"
              onChange={() => {}}
              onError={() => {}}
            />
          </div>
          <div className={styles.joinByEmail}>
            <IconTextButton size="100%">Join Paddawan</IconTextButton>
            <Text size={"0.67rem"} textAlign="center">
              By clicking “Accept and Join,” you agree to LinkedIn's Terms of
              Use , Privacy Policy , and Cookie Policy .
            </Text>
          </div>
          <div className={styles.separator}>
            <div className={styles.bar}></div>
            <Text size={"0.67rem"} fontWeight="bold">
              OR
            </Text>
            <div className={styles.bar}></div>
          </div>
          <div className={styles.joinByGoogle}>
            <button className={styles.googleBtn} onClick={handleGoogleLogin}>
              <Icon type={"googleIcon"} size={"2rem"} />
              <Text>Continue with Google</Text>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
