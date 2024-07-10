import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manish Meena </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />
            I am currently a pre final year student at Vit Bhopal University
            <br />
            With a Strong foundation in MERN Stack, Machine learning, Data Structures & Algorithms and Embedded Systems and IOT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket Analysis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Till the full stop doesn't come the sentence isn't complete."{" "}
          </p>
          <footer className="blockquote-footer">Mahendra Singh Dhoni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
