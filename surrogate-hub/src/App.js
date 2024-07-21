import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExpertAdvice from "./pages/ExpertAdvice";
import Application from "./pages/Application";
import SurrogateProfile from "./pages/SurrogateProfile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expert-advice" element={<ExpertAdvice />} />
        <Route path="/application" element={<Application />} />
        <Route path="/surrogate-profile" element={<SurrogateProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
