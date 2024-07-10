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
import netflix from "../../Assets/Projects/netflixgpt.jpeg";
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
              imgPath={netflix}
              isBlog={false}
              title="Netflix-gpt"
              description="Engineered an AI-driven application with features such as debouncing, caching, and
robust security protocols; improved app performance by 40% and reduced data breaches
by 15%. Deployed Firebase backend to enhance secure login protocols and enforce protected
routes, leading to a 90% increase in user reliability and a significant decrease in
unauthorized access incidents by 25%. Enhanced movie suggestions with OpenAI Apis and Advanced Logic, boosting
recommendation accuracy by 20%. "
              ghLink="https://github.com/manishmeena10038"
              demoLink="https://github.com/manishmeena10038"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/manishmeena10038"
              demoLink="https://github.com/manishmeena10038"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/manishmeena10038/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/manishmeena10038"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
