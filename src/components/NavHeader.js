
import {Container} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarHeader.css';
import imgLogo from "./../images/Olink.png";
// import Accordion from 'react-bootstrap/Accordion';
import Services from "./Services";
import 'bootstrap/dist/css/bootstrap.min.css';


const NavHeader=(props)=>{
  return(<><Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
  <Container >
    <Navbar.Brand href="#home">  <img className="logo" src={imgLogo} alt="logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
   <div className="ms-auto">
    <Nav  >
      
      <NavDropdown title="Home" id="basic-nav-home-dropdown">
          <NavDropdown.Item href="#action/3.1">What we do</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Who we are</NavDropdown.Item>
         
          
        </NavDropdown>
        <NavDropdown title="About Us" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">What we do</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Who we are</NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown title="Services" id="basic-nav-services-dropdown">
          <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Contact us" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" onClick={()=> { props.setShowForm(true);}}>Contact</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown title="Careers" id="basic-nav-careers-dropdown" className="careers-nav-link">
          <NavDropdown.Item href="#action/3.1">What we do</NavDropdown.Item>
        </NavDropdown>
        <button className="request-demo-btn"><a href="#request-demo">Request Demo</a></button>
          
      </Nav>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div><Services/></div>
</>)
}

export default NavHeader