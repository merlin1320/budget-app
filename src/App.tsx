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
          <Route path='*' element={<p>Fuck you wrong site</p>}/>
      </Routes>
    </>
  );
}

export default App;
