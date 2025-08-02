// src/Home.jsx

import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Hello, I'm <span className="highlight">Jahnavi</span></h1>
        <h2>Aspiring Software Developer</h2>
        <p>
          Passionate about building impactful web experiences, learning new technologies,
          and solving real-world problems.
        </p>

        <a
          href="/Jahnavi.pdf"
          
          className="resume-download-link"
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
}
