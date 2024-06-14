import React from "react";
import { Card, Col, Row } from 'antd';
import { BsGithub } from "react-icons/bs";
import Particle from "../Particle";
import './Projects.scss'; // Import your custom styles for Projects

const projects = [
  {
    imgPath: "/public/reusables.jpg",
    title: "Ecosort - Smart Segregating Bin",
    description:
      "Developed an intelligent waste sorting system using Arduino Uno and machine learning to classify plastic and glass waste, effectively diverting landfill waste.",
    ghLink: "https://github.com/Kirtan-Rajesh/EcoSort---Smart-segregating-Bin",
  },
  {
    imgPath: "/public/blog.jpg",
    title: "InkCraft - MERN Blog Platform",
    description:
      "Developed a feature-rich blogging platform with a modern front-end using React and a robust back-end using Node.js. The platform boosts user engagement with like interactions, nested comments, and detailed blog analytics, all presented on a mobile-responsive interface.",
    ghLink: "https://github.com/Kirtan-Rajesh/React-Blog-Website",
  },
  {
    imgPath: "/public/marketmind.jpg",
    title: "MarketMind - Stock Price Predictor",
    description:
      "Developed a one-page web app using Dash to display company information and dynamic stock plots. Integrated an LSTM-based machine learning model for stock price prediction. Enhanced user experience with dynamic visualizations and seamless interactions using Flask.",
    ghLink: "https://github.com/Kirtan-Rajesh/MarketMind",
  },
  {
    imgPath: "/public/cinepedia.jpg",
    title: "CINEPEDIA - A Movie Recommendation system",
    description:
      "Developed a movie recommendation engine using Cosine Similarity for personalized suggestions. Utilized Python’s beautiful-soup4 for efficient web scraping and implemented AJAX requests for a seamless user experience. Analyzed sentiment in user reviews to provide comprehensive insights on selected movies.",
    ghLink: "https://github.com/Kirtan-Rajesh/CINEPEDIA",
  },
];

const Projects = () => {
  return (
    <div className="project-section dark-theme">
      <Particle />
      <div className="container">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        
        <Row gutter={[16, 16]} justify="center">
          {projects.map((project, idx) => (
            <Col xs={24} sm={12} lg={6} key={idx}>
              <Card
                hoverable
                className="project-card"
                cover={<img alt={project.title} src={project.imgPath} />}
                actions={[
                  <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
                    <BsGithub /> GitHub
                  </a>,
                ]}
              >
                <Card.Meta title={project.title} description={project.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
