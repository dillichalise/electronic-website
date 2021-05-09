import React, { useState } from "react";
import logo from "../images/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Container,
  Button,
} from "reactstrap";
import navItems from "./navItems";
import { Link } from "react-router-dom";

const Header = (props) => {
  const qs = props.location.pathname.split("/");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    window.localStorage.clear();
    props.history.push("/");
  };
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
            {qs[1] === "admin" && qs.length >= 3 ? (
              <li className="nav-item active py-1 px-2">
                <Button
                  onClick={handleLogout}
                  className="nav-link text-white"
                  size="sm"
                  color="link"
                  title="Logout"
                >
                  <i className="fa fa-power-off" />
                </Button>
              </li>
            ) : null}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
