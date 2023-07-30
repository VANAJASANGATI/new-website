
import {Container} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './SubItemsContainer.css';
import imgLogo from "./../images/Olink.png";
// import Accordion from 'react-bootstrap/Accordion';
import Services from "./Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { useState } from "react";


export default function SubItemsContainer(){
 let [subItems, SetSubItems] = useState([{
    text: "Overview", 
    header: "OLink Solutions is here to make a difference through technology.",
    content: "Leading the way in innovation for over 10 years, we build greater futures for businesses across multiple industries and 50 countries."
 }, {
    text: "Industries", items: [{
       text: "Banking" 
    }, {
        text: "Education" 
     },  {
        text: "Life Sciences" 
     },
     {
        text: "Capital Markets" 
     },
     {
        text: "Energy, Resources, and Utilities" 
     },
     {
        text: "Manufacturing"
     },
     {
        text: "Public services"
     }
    ]
},
{
    text: "Services", items: [{
       text: "Cloud" 
    }, {
        text: "Data Analytics" 
     }, {
        text: "Consulting" 
     }, {
        text: "Cyber Security" 
     }]
}
]);

return <>
  <ul className="list-type-none sub-items-box">
   { subItems.map(subItem => <li> <a>{subItem.text}</a> <span></span></li>)} 
  </ul>
</>;
}