
// import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import NavHeader from './components/NavHeader';
import Accordions  from './components/Accordians';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestDemoForm from "./components/RequestDemoForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import UserForm from './components/UserForm';



function App() {

  /* useEffect(() => {
  let [message, setMessage] = useState("");
    fetch("http://localhost:8080/getMessage")
      .then((res) => res.json())
      .then((data) =>{setMessage(data.message); });
  }, []); */
  
  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route   path="/" element={ <Home/> }>
          <Route  index  element={ <Services/> }/>  
          <Route  path="demo"   element={ <RequestDemoForm/> }/>  
          <Route path="contact"   element={ <UserForm/> }/>  
      </Route>
    </Routes>
        {/* <Route path="service/*" element={ <Service/> }>
               <Route path="development" element={ <Development />} />
               <Route path="consult" element={ <Consult/> } />
        </Route>   */}
    </BrowserRouter>

    </>
  );
}

export default App;
