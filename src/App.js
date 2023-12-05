import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import "./styles/normalize.css"
import "./styles/App.css"

import ContactSnippet from "./components/snippet/contactSnippet";
import Cursor from "./components/cursor/Circul";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <ContactSnippet />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
