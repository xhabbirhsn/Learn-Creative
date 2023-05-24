import "../src/dist/styles.css";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="models" element={<Models />} />
        <Route path="banner" element={<Banner />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
