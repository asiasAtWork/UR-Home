import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import Navbar from "./components/navbar";
import Landing from './pages/landing';
import Products from './pages/products';
import AboutUs from './pages/aboutus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </Router>
      <Landing />
    </div>
  );
}

export default App;
