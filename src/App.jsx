//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import './Styles.css'

import { Link, Route, Routes } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import NotFound from "./NotFound"
import Projects from "./Projects"
import { Button } from "@mui/material";


function App() {
  

  return (
    <>
      <div>
         <nav className="navbar">
          <div className="logo">Jahnavi</div>
        <ul className="nav-links">
          <li><Link to="/Jahnavi/">Home</Link></li>
          <li><Link to="/Jahnavi/about">About</Link></li>
          <li><Link to="/Jahnavi/contact">Contact</Link></li>
          <li><Link to="/Jahnavi/projects">Projects</Link></li>
          <li><a href="/Jahnavi/Jahnavi.pdf" style={{ padding: '8px 16px', background: '#003366', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
  <Button variant="contained" color="primary">
    Download Resume
  </Button>
</a></li>
      <li>
  <Link to="/Jahnavi/contact" style={{ padding: '8px 16px', background: '#003366', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
    Contact
  </Link>
</li>
          </ul>
         </nav>

        <Routes>
        <Route path="/Jahnavi/" element={<Home />} exact />
        <Route path="/Jahnavi/about" element={<About />} exact />
        <Route path="/Jahnavi/contact" element={<Contact />} exact />
        <Route path="/Jahnavi/projects" element={<Projects />} exact />
        
        <Route path="/Jahnavi/*" element={<NotFound />} exact />
      </Routes>
      </div>
    </>
  )
}

export default App
