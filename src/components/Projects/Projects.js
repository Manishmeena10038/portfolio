import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import frauddetection from "../../Assets/Projects/frauddetection.jpeg";
import malvibol from "../../Assets/Projects/malvibolo.png";
import suicide from "../../Assets/Projects/suicide.png";
import ecosort from "../../Assets/Projects/ecosort.png";
import logo from "../../Assets/Projects/netflixgpt.jpeg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malvibol}
              isBlog={false}
              title="Malvi-Bolo"
              description="Built a tool for the Malvi region and language using MongoDB, Express.js, React.js,
Node.js, and Bootstrap. Features include user authentication, content management, and real-time communication.Engineered Language converter that converts Malvi into Hindi and Hindi into Malvi which
makes communication easy."
              ghLink="https://github.com/manishmeena10038"
              demoLink="https://github.com/manishmeena10038"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecosort}
              isBlog={false}
              title="Eco-Sort"
              description="Developed EcoSort system using Raspberry Pi, camera module, and machine learning for
automated waste segregation. Utilized ML to accurately sort biodegradable and non-biodegradable waste with an
improved accuracy of 91%. Developed Webpage for this application which takes the image from the user and predicts
the type of waste, through the implementation of Machine Learning and Flask framework"
              ghLink="https://github.com/Manishmeena10038/Ecosort-"
              demoLink="https://github.com/Manishmeena10038/Ecosort-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Vichar1.0"
              description="Developed a blog website using the MERN stack and Material UI, featuring 6 categories. It 
allows users to create, edit, and delete posts, as well as JWT authentication. "
              ghLink="https://github.com/manishmeena10038/vichar1.0"
              demoLink="https://github.com/manishmeena10038/vichar1.0"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frauddetection}
              isBlog={false}
              title="Online payment fraud detection"
              description="The [Online Payments Fraud Detection Using ML] is a cutting-edge solution designed to address the growing concern of online payment fraud. As the digital age continues to reshape the way we conduct financial transactions, ensuring the security and integrity of online payments is paramount. This project leverages machine learning and data-driven techniques to detect and prevent fraudulent activities in the online payment ecosystem."
              ghLink="https://github.com/smartinternz02/SI-GuidedProject-601156-1698155152"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Farming in the Digital Age: A Solar-Powered IoT Solution for Agriculture "
              description="Developed an IoT system that automates irrigation, monitoring soil moisture (10-60%), 
temperature (±0.5°C), and humidity (±2%), activating irrigation below 30% and deactivating above 50%. "
              ghLink="https://github.com/Manishmeena10038/-Farming-in-the-Digital-Age-A-Solar-Powered-IoT-Solution-for-Agriculture"
              demoLink="https://github.com/Manishmeena10038/-Farming-in-the-Digital-Age-A-Solar-Powered-IoT-Solution-for-Agriculture/blob/main/Demonstration"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aqr}
              isBlog={false}
              title="Smart Office: Monitoring Indoor Air Quality with Arduino"
              description=" Designed a low-cost Arduino-based air pollution monitor using wireless tech, detecting CO2, 
CO, and NH3, also measuring humidity and temperature, serving as an alcohol and smog detector. "
              ghLink="https://github.com/Manishmeena10038/literate-carnival"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
