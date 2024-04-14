import { Route, Routes } from "react-router-dom";
import MarketingAgencyFinder from "./pages/MarketingAgencyFinder/MarketingAgencyFinder";
import Login from "./pages/Login/Login";
import { MAIN, LOGIN } from "./constants/routes";
import { useLoginUser } from "./stores/useLoginUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/login/firebase";
import { useEffect } from "react";
function App() {
  const setCredentials = useLoginUser((state) => state.setCredentials);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) setCredentials(user);
    });
    return () => {
      setCredentials(null);
    };
  }, []);
  return (
    <Routes>
      <Route path={MAIN} element={<MarketingAgencyFinder />} />
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  );
}

export default App;
