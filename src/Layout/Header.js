import React from "react";
import { Nav, Container } from "reactstrap";
import { Link } from "react-router-dom";
import navItems from "./navItems";

const Header = () => {
  return (
    <div>
      <Nav
        className="navbar navbar-expand-md py-1 navbar-light bg-primary"
        id="main_navbar"
      >
        <Container>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse pl-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              {navItems.map((item) => {
                return (
                  <li className="nav-item active py-1">
                    <Link to={item.path} className="nav-link text-white">
                      <strong>{item.name} </strong>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Nav>
    </div>
  );
};
export default Header;
