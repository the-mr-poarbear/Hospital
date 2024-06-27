import React from 'react';
import './NavigationBar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
   
      <Navbar bg="light" expand="lg" className='navBody'>
      <Container className='mx-3'>
        <Navbar.Brand href="#home" className='fs-1 mx-3'>Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <div className="dropdown">
            <Nav.Link className=" dropdown-toggle fs-4" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </Nav.Link>
            <ul className="dropdown-menu">
              <li><Link to= "/LoginDoc" className="dropdown-item" >Doctors</Link></li>
              <li><Link to= "/LoginNurse" className="dropdown-item" href="#">Nurse</Link></li>
              <li><Link to= "/LoginRecep" className="dropdown-item" href="#">Reception</Link></li>
              <li><Link to= "/LoginAdmin" className="dropdown-item" href="#">Admin</Link></li>
            </ul>
          </div>
            <Nav.Link href="#visits" className='fs-4 mx-3'>Visits</Nav.Link>
            <Nav.Link href="#patients" className='fs-4 mx-3'>Patients</Nav.Link>
            <Nav.Link href="#directions" className='fs-4 mx-3'>Directions</Nav.Link>
            <Nav.Link href="#doctors" className='fs-4 mx-3'>Doctors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    
  );
};

export default NavigationBar;
