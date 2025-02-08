import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ManageBudget from "./pages/ManageBudget";
import NavBar from "./NavBar";

function App() {
  return (
    <>
        <NavBar/>
      <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<ManageBudget />} path="/budget" />
          <Route element={<AboutPage />} path="/about" />
      </Routes>
    </>
  );
}

export default App;
