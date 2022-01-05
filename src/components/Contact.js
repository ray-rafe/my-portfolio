import React from "react";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/github.svg";
import styled from "styled-components";

function sendEmail() {
  window.location = "mailto:robertsrory1@gmail.com";
}

const Div = styled.div`
  background-color: #edc7b7;
  color: #ac3b61;
`;

export default function Contact() {
  return (
    <Div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
        className="section"
        id="contact"
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            paddingBottom: "0rem",
          }}
        >
          Contact
        </h1>
        <h2> Let's create your next experience together</h2>
        <a
          style={{
            color: "#123c69",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
          href="robertsrory1@gmail.com"
          onClick={sendEmail}
        >
          robertsrory1@gmail.com
        </a>
        <div style={{ marginTop: "5vh" }}>
          <a href="https://github.com/ray-rafe">
            <img
              src={Github}
              alt="Nope"
              style={{ width: "2rem", height: "2rem", margin: "0.5rem" }}
            ></img>
          </a>
          <a href="https://github.com/ray-rafe">
            <img
              src={Linkedin}
              alt="Nope"
              style={{ width: "2rem", height: "2rem", margin: "0.5rem" }}
            ></img>
          </a>
        </div>
      </div>
    </Div>
  );
}
