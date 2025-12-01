import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Login/loginpage";
import InvalidLogin from "./Login/invalidLogin";

import ManagerHomePage from "./Manager/managerHomePage";
import ManagerEmployeeSelection from "./Manager/managerEmployeeSelection";
import ManagerCurrentReview from "./Manager/managerCurrentReview";
import ManagerHistoricReview from "./Manager/managerHistoricReview";
import ManagerNewOne from "./Manager/managerNew1-1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/invalid" element={<InvalidLogin />} />

        <Route path="/manager/home" element={<ManagerHomePage />} />
        <Route path="/manager/select" element={<ManagerEmployeeSelection />} />
        <Route path="/manager/current" element={<ManagerCurrentReview />} />
        <Route path="/manager/historic" element={<ManagerHistoricReview />} />
        <Route path="/manager/new" element={<ManagerNewOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
