import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Result from "./pages/Result/Result";
import { GENERATE_PLAN, MAIN } from "./constants/routes";
function App() {
  return (
    <Routes>
      <Route path={MAIN} element={<MainPage />} />
      <Route path={GENERATE_PLAN + "/:id"} element={<Result />} />
    </Routes>
  );
}

export default App;
