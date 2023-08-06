// import UserForm from '../../components/UserForm';
// import Services from '../../components/Services';
import NavHeader from '../../components/NavHeader';
import Accordions from '../../components/Accordians';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Home() {
  let [showForm, setShowForm] = useState(false);
  //   let [showServices, setShowServices] = useState(false);

  return (
    <>
      <NavHeader setShowForm={setShowForm} />
      <Outlet />
      <Accordions />
    </>
  );
}
