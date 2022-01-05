import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  color: #123c69;
  padding-top: 5.3rem;
  padding-right: 9rem;
  font-size: 0.8rem;
  background-color: #edc7b7;
  font: "Montserrat", sans-serif;
  cursor: pointer;
  @media (max-width: 768px) {
    align-items: center;
    padding-right: 2rem;
  }
`;

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div>
            <Li>
              <li>
                <Link activeClass="active" to="work" spy={true} smooth={true}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true}>
                  Contact
                </Link>
              </li>
            </Li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
