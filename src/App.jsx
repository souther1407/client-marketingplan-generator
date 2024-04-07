import { Route, Routes } from "react-router-dom";

import MarketingAgencyFinder from "./pages/MarketingAgencyFinder/MarketingAgencyFinder";
import { MAIN } from "./constants/routes";
function App() {
  return (
    <Routes>
      <Route path={MAIN} element={<MarketingAgencyFinder />} />
    </Routes>
  );
}

export default App;
