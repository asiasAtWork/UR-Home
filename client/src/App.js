import React from 'react';
import './index.css'; 
import Routes from './components/routes';
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import Landing from './pages/landing';
import Products from './pages/products';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
