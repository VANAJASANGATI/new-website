import UserForm from './UserForm';
import Services from './Services';
import NavHeader from './NavHeader';
import Accordions  from './Accordians';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Home(){
    let [showForm, setShowForm] = useState(false);
    let [showServices,setShowServices] = useState(false);

    return <>  <NavHeader setShowForm={setShowForm}/>
    <Outlet/>
   <Accordions/>
   </>;
}