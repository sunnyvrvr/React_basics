import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/contact">Contact</Link></li>
        </ul>    
      </nav>

    <hr />

    <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/contact" exact element={<Contact/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
