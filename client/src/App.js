import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import Landing from './pages/landing';
import Products from './pages/products';
import AboutUs from './pages/aboutus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        </Routes>
      </Router>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
