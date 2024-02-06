import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Result from "./pages/Result/Result";
import GrowYourBusiness from "./pages/GrowYourBusiness/GrowYourBusiness";
import { GENERATE_PLAN, MAIN, GROW_YOUR_BUSINESS } from "./constants/routes";
function App() {
  return (
    <Routes>
      <Route path={MAIN} element={<MainPage />} />
      <Route path={GENERATE_PLAN + "/:id"} element={<Result />} />
      <Route path={GROW_YOUR_BUSINESS} element={<GrowYourBusiness />} />
    </Routes>
  );
}

export default App;
