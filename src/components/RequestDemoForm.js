import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./RequestDemoForm.css"
const RequestDemoForm=()=> {
  let [data, setData] = useState({ 
  email: '',
  firstName:  '',
  lastName: '',
  jobTitle:  '',
  companyName:  '',
  mobile:  '',
  message:  ''});
  let [message, setMessage] = useState("");
  function onChangeData(event){
    setData({...data, [event.target.name]: event.target.value });
  }
  function sendDemoRequest(event){
    event.preventDefault();
    console.log(data);
    fetch(window.location.href+"sendMessage", {
      method: "POST",
      body: JSON.stringify({...data}),
      headers: {
        "Content-Type": 'application/json' 
      }
    })
      .then((res) => {  
      setData({ 
        email: '',
        firstName:  '',
        lastName: '',
        jobTitle:  '',
        companyName:  '',
        mobile:  '',
        message:  ''});
      toast.success('Saved succuessfully !', {
        position: toast.POSITION.TOP_RIGHT
      });
    })
     

    return false;
  }
  return (
    <div className="form-container main-form-demo mt-0" id="request-demo">
    <ToastContainer />
    <form className="float-right" onSubmit={sendDemoRequest} method="POST" autocomplete="off">
    <h3 className="submit-form">Request Form</h3>
    <MDBInput wrapperClass='mb-4' id='form6Example5' type="email" label='Email' onChange={onChangeData} 
       value={data.email}
     className={data.email !== ""?"filled-input": ""} name="email"/>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' name="firstName" required type="text" onChange={onChangeData} 
            value={data.firstName}
          className={data.firstName !== ""?"filled-input": ""} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name'  name="lastName" required type="text" onChange={onChangeData} 
            value={data.lastName} 
          className={data.lastName !== ""?"filled-input": ""} />
        </MDBCol>
      </MDBRow>
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Job title' name="jobTitle"  type="text" onChange={onChangeData} 
       value={data.jobTitle}
      className={data.jobTitle !== ""?"filled-input": ""}  />
      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' name="companyName"  type="text" value={data.companyName}
      onChange={onChangeData} className={data.companyName !== ""?"filled-input": ""}  />
      
      
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' name="mobile" required value={data.mobile}
      className={data.mobile !== ""?"filled-input": ""}  onChange={onChangeData} />

      <MDBInput wrapperClass='mb-4' textarea="true" id='form6Example7' rows={10} required name="message"  value={data.message}
        className={data.message !== ""?"filled-input messgae-container": "messgae-container"}  onChange={onChangeData} 
         label='Your message' />

      <MDBCheckbox
        wrapperClass='mb-4' name="terms"
        id='form6Example8'
        label='I agree to the privacy policy.'
        defaultChecked  onChange={onChangeData} 
      />

      <MDBBtn className='mb-4 bg-black form-request-demo-btn' type='submit'  block 
      onClick={sendDemoRequest}>
        Request demo
      </MDBBtn>
    </form>
    </div>
    
  );
}
export default RequestDemoForm
