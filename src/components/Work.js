import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
  color: #ac3b61;
  font: "Montserrat", sans-serif;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media (max-width: 2000px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

// const margin = {
//   paddingTop: "20vh",
// };

export default function Work() {
  return (
    <div className="section" id="work">
      <div style={{ backgroundColor: "#edc7b7" }}>
        <Fade bottom big cascade>
          <H1>Work</H1>
        </Fade>
        <Div>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://picsum.photos/300/250?grayscale"
              alt="Card image"
            />
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://picsum.photos/300/250?grayscale"
              alt="Card image"
            />
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://picsum.photos/300/250?grayscale"
              alt="Card image"
            />
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://picsum.photos/300/250?grayscale"
              alt="Card image"
            />
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://picsum.photos/300/250?grayscale"
              alt="Card image"
            />
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://picsum.photos/300/250?grayscale"
              alt="Card image"
            />
          </Card>
        </Div>
      </div>
    </div>
  );
}
