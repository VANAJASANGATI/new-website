
import { Navbar,Nav,Container } from "react-bootstrap"


import "./Header.css"


const Header=()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="logo.jpeg" alt="logo"/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link  className="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link  className="nav-link" href="#aboutus">About us</Nav.Link>
            <Nav.Link  className="nav-link" href="#contactus">Contact us</Nav.Link>
            <Nav.Link  className="nav-link" href="#careers" >Careers</Nav.Link>
            <Nav.Link  className="nav-link" href="#services">Services</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
    
}
export default Header