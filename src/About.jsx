import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import './About.css';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        About Me
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
        <Typography paragraph>
          Hello! I’m <strong>Jahnavi</strong>, a passionate and motivated individual with a strong foundation in
          cloud computing, full-stack development, and emerging technologies.
        </Typography>

        <Typography paragraph>
          I recently completed a technical internship through the <strong>AICTE–Eduskills AWS Virtual Internship Program</strong>, 
          where I gained hands-on experience with services like <strong>EC2</strong>, <strong>S3</strong>, <strong>Lambda</strong>, <strong>IAM</strong>, <strong>RDS</strong>, and <strong>CloudWatch</strong>.
        </Typography>

        <Typography paragraph>
          My goal is to leverage technology to build meaningful solutions, especially in the areas of education, accessibility,
          and scalable web applications.
        </Typography>

        <Typography paragraph>
          I’m currently exploring opportunities in <strong>software engineering</strong>, <strong>cloud development</strong>, and <strong>AI-assisted education platforms</strong>.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
