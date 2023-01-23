import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { brainBig } from "../assets";
import { RootState } from "../redux/store";
import { deleteUser } from "../redux/slices/user.slice";
import { useSelector, useDispatch } from "react-redux";

export default function TmpMain() {
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  //Navigate to auth if user not logged in yet
  if (!userData) {
    return <Navigate to="/auth" />;
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/resource/home">
            <img className="nav-logo" src={brainBig} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="justify-content-end me-auto"
              style={{ width: "100%" }}
            >
              <Nav.Link className="nav-links" href="/resource/home">
                Home
              </Nav.Link>
              <NavDropdown className="nav-links" title={userData.name}>
                <div className="d-flex justify-content-center m-2">
                  <img
                    className="header__header-img-container"
                    src={userData.image}
                    alt="profile-icon"
                  />
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(deleteUser())}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
