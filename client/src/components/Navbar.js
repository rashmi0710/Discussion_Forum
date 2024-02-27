import React from 'react';
import '../styles/style.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const NavBar = () => {
  
  

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container className="custom-navbar">
          <Navbar.Brand>
            <i className="fa-solid fa-grip-vertical"></i> Anonymous
          </Navbar.Brand>
          
         
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
