import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return(
            <Navbar fixed="top" expand="lg">
            <Container fluid={true}>
                <Navbar.Brand href="/">AK</Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor: "white"}} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#home">PROJECTS</Nav.Link>
                    <Nav.Link href="#link">CONTACT ME</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;