import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function HeroSection() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='col-12 col-lg-6 message-width'>
            <div className="left-side">
              <span>Messages</span>
              <span className="message-counter"> 5</span>
            </div>
          </Col>     
          <Col className='col-12 col-lg-6'>
            <div className="user-profile-card h-100 d-flex flex-column justify-content-between">
              <Card className="flex-grow-1">
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  <Card.Text>User Bio</Card.Text>
                </Card.Body>
              </Card>
             
              <div className="three-dots-container">
                <span className="three-dots">...</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;
