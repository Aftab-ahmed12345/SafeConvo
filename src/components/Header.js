import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsBell } from 'react-icons/bs'; // Import the BsBell component from react-icons/bs
import { FaEnvelope } from 'react-icons/fa'; // Import the FaEnvelope component from react-icons/fa

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="align-items-center">
          <Col>
            <Navbar.Brand href="#home" className='logo'>SafeConvo</Navbar.Brand>
          </Col>
          <Col className="d-flex">
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="Searchbar" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav ms-auto">
          <Nav className="ml-auto ms-auto">
            <Nav.Link href="#Invite_Friends" className="ps-3 ms-3 me-3 Invitebutton bg-success text-light pe-3 ps-3">Invite Friends</Nav.Link>
            <Nav.Link href="#login" className="ps-3 ms-3 me-3 loginbutton bg-success text-light pe-3 ps-3">Login</Nav.Link>
            <Nav.Link href="#signup" className="ps-3 pe-3 me-5 signupbutton bg-success text-light">Sign Up</Nav.Link>

            <Button variant="outline-primary" size="sm" className="me-5">
              <FaEnvelope className="message-icon" />
            </Button>

            <Button variant="outline-primary" size="sm">
              <BsBell className="bell-icon" />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
