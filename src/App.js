
import Header from './components/Header';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  let [showForm, setShowForm] = useState(false);
  return (
    <>
    <Header setShowForm={setShowForm} />
    {showForm && <UserForm setShowForm={setShowForm}/>}
    </>
  );
}

export default App;
