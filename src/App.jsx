import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import Menu from "./Menu";
import TentangKami from "./Tentang Kami";
import Ulasan from "./Ulasan";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Tentang Kami" element={<TentangKami />} />
         <Route path="/ulasan" element={<Ulasan />} /> 
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
