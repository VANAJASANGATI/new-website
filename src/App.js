
// import Header from './components/Header';
import UserForm from './components/UserForm';
import Services from './components/Services';
import NavHeader from './components/NavHeader';
import Accordions from "./components/Accordians"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  let [showForm, setShowForm] = useState(false);
  let [showServices,setShowServices] = useState(false);
  return (
    <>
    {/* <Header setShowForm={setShowForm} />
    {showForm && <UserForm setShowForm={setShowForm}/>}
    {showServices && <Services setShowServices={setShowServices}/>} */}
    <NavHeader setShowForm={setShowForm}/>
    {showForm && <UserForm setShowForm={setShowForm}/>}
   {showServices && <Services setShowServices={setShowServices}/>}
   <Accordions/>
    </>
  );
}

export default App;
