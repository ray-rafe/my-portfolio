import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Cat from "../images/busy-working.gif";

function sendEmail() {
  window.location = "mailto:robertsrory1@gmail.com";
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  font: "Montserrat", sans-serif;
  line-height: 10px;
  background-color: #edc7b7;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  padding-bottom: 0 rem;
  color: #ac3b61;
  letter-spacing: 0.2rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;

const H2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #ac3b61;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// const P = styled.p`
//   font-size: 1.2rem;
//   line-height: 1.5rem;
//   overflow: hidden;
//   /* width: 40%; */
//   margin-right: 2rem;
//   margin-left: 2rem;
//   text-align: center;
//   align-items: center;
// `;

const Button = styled.button`
  border: none;
  background-color: #ac3b61;
  color: white;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  font: "Montserrat", sans-serif;
`;

export default function Intro() {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Div>
            <Fade bottom cascade>
              <H2>Hi, I'm Rory Ray Roberts</H2>
              <div className="heading-wrapper">
                <H1>Full-Stack Web Developer</H1>
              </div>
              <img src={Cat} alt="Nope"></img>
            </Fade>
            <Fade right>
              <div style={{ paddingTop: "2rem" }}>
                <Button onClick={sendEmail}>CONNECT WITH ME</Button>
              </div>
            </Fade>
          </Div>
        </div>
      </div>
    </div>
  );
}
