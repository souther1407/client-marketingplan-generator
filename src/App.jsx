import { Route, Routes } from "react-router-dom";
import MarketingAgencyFinder from "./pages/MarketingAgencyFinder/MarketingAgencyFinder";
import Login from "./pages/Login/Login";
import { MAIN, LOGIN } from "./constants/routes";
function App() {
  return (
    <Routes>
      <Route path={MAIN} element={<MarketingAgencyFinder />} />
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  );
}

export default App;
