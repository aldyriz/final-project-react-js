import "./App.css";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import Vacancy from "./vacancy/vacancy";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacancy" element={<Vacancy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
