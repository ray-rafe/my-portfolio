import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  padding-top: 10rem;
  /* padding-bottom: 5rem; */
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: #edc7b7;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* padding-right: 5rem;
    padding-left: 10rem; */
  }
`;

const H1 = styled.h1`
  font-weight: bold;
  color: #ac3b61;
`;

export default function About() {
  return (
    <Div className="section" id="about">
      <div style={{ height: "20rem" }}>
        <H1>About Me</H1>
        <p style={{ color: "#ac3b61" }}>
          “Today is your opportunity to build the tomorrow you want.” – Ken
          Poirot
          <br></br>
          <br></br>I ask "Why, why not and how might we?"
          <br></br>
          <br></br>Collaborative and innovative, I enjoy working with others to
          reach an end goal. I’ve focused on continued development of myself, as
          well as broadening my skill set and experience.
        </p>
      </div>
      <img
        src="https://i.ibb.co/sJL768G/26055803-1049893065153701-7601555259257834944-n.jpg"
        alt="#"
        style={{
          paddingight: "10rem",
          height: "20rem",
          border: "6px solid #123c69",
        }}
      ></img>
    </Div>
  );
}
