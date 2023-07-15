import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./RequestDemoForm.css"
const RequestDemoForm=()=> {
  
  return (
    <div className="form-container m-auto mt-5">
    <form>
    <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Job title' />
      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
      
      
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={10} className='messgae-container' label='Your message' />

      <MDBCheckbox
        wrapperClass='mb-4'
        id='form6Example8'
        label='I agree to the privacy policy.'
        defaultChecked
      />

      <MDBBtn className='mb-4 bg-black form-request-demo-btn' type='submit' block>
        Request demo
      </MDBBtn>
    </form>
    </div>
    
  );
}
export default RequestDemoForm
