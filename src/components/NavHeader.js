
import {Container} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarHeader.css';
import imgLogo from "./../images/Olink.png";
// import Accordion from 'react-bootstrap/Accordion';
import Services from "./Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import SubItemsContainer from "./SubItemsContainer";

const NavHeader=(props)=>{
  let navigate = useNavigate();
  let listItems = [{text: "What we do"},
                     {text: "Who we are"},  
                     {text: "Insights"}, 
                     {text: "Careers"},
                     {text: "Investors"},
                    ];
  return(<><Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
        <Navbar.Brand href="#home" onClick={(event)=> { event.preventDefault(); navigate("/");} }>  <img className="logo" src={imgLogo} alt="logo"/></Navbar.Brand>

    <div className="container">
    <ul className="nav-list row">
      { listItems.map(item => <li className="nav-item col-lg-2 col-md-3 col-sm-12" >
         <a href=""> {item.text} </a><br/>
         <span className="item-underline"></span>
         <div className="sub-items-container">
           <SubItemsContainer/>
         </div>
        </li>)}
    </ul> <input type="checkbox" id="app-toggle" /><label for="app-toggle">
<span>Business</span>
<span>Personal</span>
</label>
    </div>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    {/* <Navbar.Collapse id="basic-navbar-nav">
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
          <NavDropdown.Item href="#action/3.1"><a onClick={(event)=> { event.preventDefault(); navigate("contact");} }>Contact</a></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown title="Careers" id="basic-nav-careers-dropdown" className="careers-nav-link">
          <NavDropdown.Item href="#action/3.1">What we do</NavDropdown.Item>
        </NavDropdown>
        <button className="request-demo-btn"><a onClick={(event)=> { event.preventDefault(); navigate("demo");} }>Request Demo</a></button>
      </Nav>
    
      </div>
    </Navbar.Collapse> */}
</Navbar>

<div></div>
</>)
}

export default NavHeader