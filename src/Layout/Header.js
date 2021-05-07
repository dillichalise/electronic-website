import React, { useState } from "react";
import logo from "../images/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Container,
} from "reactstrap";
import navItems from "./navItems";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="navbar-expand-lg bg-danger static-top ">
      <Container>
        <NavbarBrand>
          <Link to="/">
            <img src={logo} alt="Logo" height="60" />
          </Link>
        </NavbarBrand>
        <NavbarToggler
          className="fa fa-bars text-white ml-auto"
          onClick={toggle}
        />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navItems.map((item) => {
              return (
                <li className="nav-item active py-1 px-2">
                  <Link to={item.path} className="nav-link text-white">
                    <strong>{item.name} </strong>
                  </Link>
                </li>
              );
            })}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
