import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Signup from "./Signup";

const NavbarComp = () => {
  const [click, setClick] = useState(false);
  const handleprofile = (event) => {
    event.preventDefault();
    setClick(true);
  };

  return (
    <React.Fragment>
      <Navbar className="px-5 navbar-main">
        <Navbar.Brand href="#home" className="text-uppercase fw-bold">
          task-app
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Signup />
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarComp;
