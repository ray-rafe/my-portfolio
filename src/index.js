import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import styled from "styled-components";

const Div = styled.div`
  background-color: #edc7b7;
`;

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Div>
      <Intro />
      <Work />
    </Div>
    <About />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
