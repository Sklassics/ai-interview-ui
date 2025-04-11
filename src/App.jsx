// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/home/Hero";
import Works from "./pages/home/Works";
import FAQSection from "./pages/home/FAQSection";
import HeroSection from "./pages/home/HeroSection";
import Login from "./pages/home/Login";
import BookDemo from "./pages/BookDemo";

import './App.css';
import HomePage from "./pages/HomePage";
import Navbar from "./pages/home/Navbar";



function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/Blog" element={<HeroSection />}/>
        <Route path="/Features" element={<Hero />}/>
        <Route path="/FAQ" element={<FAQSection />}/>
        <Route path="/Howitworks" element={<Works />}/>

      </Routes>
    </>
  );
}

export default App;
