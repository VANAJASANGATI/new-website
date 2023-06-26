
import { Navbar,Nav,Container } from "react-bootstrap"


import "./Header.css";
import imgLogo from "./../images/logo.jpeg";


const Header=(props)=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img class="logo" src={imgLogo} alt="logo"/>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link  className="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link  className="nav-link" href="#aboutus">About us</Nav.Link>
            <Nav.Link  className="nav-link" href="#contactus" onClick={()=> { props.setShowForm(true);}}>Contact us</Nav.Link>
            <Nav.Link  className="nav-link" href="#careers" >Careers</Nav.Link>
            <Nav.Link  className="nav-link" href="#services">Services</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
    
}
export default Header