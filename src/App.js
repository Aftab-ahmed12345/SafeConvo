import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import UserList from './components/UserList';
import MessageInput from './components/MessageInput';
import Card from 'react-bootstrap/Card';

function App() {
  const [users] = useState([
    { name: 'User1', online: true },
    { name: 'User2', online: false },
  ]);

  const handleSendMessage = (message) => {
    // Handle sending the message (you can update the state or make an API call)
    console.log(`Sending message: ${message}`);
  };
    return (
    <>
      <div>
        <Header />
        <HeroSection />
      </div>
        <Container fluid>
        <Row>
          
             <Col lg={2} > 
              <UserList users={users} />
             </Col>
             
             
             <Col lg={9} className="body-vertical-line h-200">
               <MessageInput onSendMessage={handleSendMessage} />
             </Col>
          
        </Row>
      </Container>    
    </>
  );
}
export default App;
