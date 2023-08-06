import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { ToastContainer } from 'react-toastify'; //add toast
import 'react-toastify/dist/ReactToastify.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './RequestDemoForm.css';
const RequestDemoForm = () => {
  let [data, setData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    mobile: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  // let [message, setMessage] = useState("");
  function onChangeData(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function sendDemoRequest(event) {
    event.preventDefault();

    setFormErrors({ ...validate(data) });
    console.log(data);

    // console.log(formErrors);
    // fetch(window.location.href+"sendMessage", {
    //   method: "POST",
    //   body: JSON.stringify({...data}),
    //   headers: {
    //     "Content-Type": 'application/json'
    //   }
    // })
    //   .then((res) => {
    //   setData({
    //     email: '',
    //     firstName:  '',
    //     lastName: '',
    //     jobTitle:  '',
    //     companyName:  '',
    //     mobile:  '',
    //     message:  ''});
    //   toast.success('Saved succuessfully !', {
    //     position: toast.POSITION.TOP_RIGHT
    //   });
    // })

    // return false;
  }
  const validate = (data) => {
    const errors = {};
    const re = /^[a-zA-Z\s]+$/;
    const rex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ren = /^\d{10}$/;

    if (!data.email) {
      errors.email = 'Email is required!';
    } else if (!rex.test(data.email)) {
      errors.email = 'Email is inavlid!';
    }

    if (!data.firstName) {
      errors.firstName = 'FirstName is required!';
    } else if (!re.test(data.firstName)) {
      errors.firstName = 'Please enter a valid first name!';
    }

    //  else if(data.firstName.length < 3){
    //   errors.firstName="Please enter at least 3 characters!"
    //  }

    if (!data.lastName) {
      errors.lastName = 'LastName is required!';
    } else if (!re.test(data.lastName)) {
      errors.lastName = 'Please enter a valid last name!';
    }

    //  else if(data.lastName.length < 3){
    //   errors.lastName="Please enter at least 3 characters!"
    //  }

    if (!data.mobile) {
      errors.mobile = 'Phone number is required!';
    } else if (!ren.test(data.mobile)) {
      errors.mobile = 'Please enter a valid 10-digit phone number!';
    }
    if (!data.message) {
      errors.message = 'Your message is required!';
    } else if (data.message < 20) {
      errors.message = 'Please enter at least 20 characters!';
    }

    if (data.jobTitle.length > 0) {
      if (!re.test(data.jobTitle)) {
        errors.jobTitle = 'Invalid Job title!';
      } else if (!data.companyName) {
        errors.companyName = 'Company name required!';
      } else if (!re.test(data.companyName)) {
        errors.companyName = 'Invalid company name!';
      }
    }
    console.log(errors);
    return errors;
  };
  return (
    <div className='form-container main-form-demo mt-0' id='request-demo'>
      <ToastContainer />
      <form
        className='float-right'
        onSubmit={sendDemoRequest}
        method='POST'
        autoComplete='off'
      >
        <h3 className='submit-form'>Request Form</h3>
        <p className='error-message'>{formErrors.email}</p>
        <MDBInput
          wrapperClass='mb-4'
          type='email'
          id='form6Example5'
          label='Email'
          onChange={onChangeData}
          value={data.email}
          className={data.email !== '' ? 'filled-input' : ''}
          name='email'
        />

        <MDBRow className='mb-4'>
          <MDBCol>
            <p className='error-message'>{formErrors.firstName}</p>
            <MDBInput
              id='form6Example1'
              label='First name'
              name='firstName'
              required
              type='text'
              onChange={onChangeData}
              value={data.firstName}
              className={data.firstName !== '' ? 'filled-input' : ''}
            />
          </MDBCol>

          <MDBCol>
            <p className='error-message'>{formErrors.lastName}</p>
            <MDBInput
              id='form6Example2'
              label='Last name'
              name='lastName'
              required
              type='text'
              onChange={onChangeData}
              value={data.lastName}
              className={data.lastName !== '' ? 'filled-input' : ''}
            />
          </MDBCol>
        </MDBRow>
        <p className='error-message'>{formErrors.jobTitle}</p>
        <MDBInput
          wrapperClass='mb-4'
          id='form6Example4'
          label='Job title'
          name='jobTitle'
          type='text'
          onChange={onChangeData}
          value={data.jobTitle}
          className={data.jobTitle !== '' ? 'filled-input' : ''}
        />

        <p className='error-message'>{formErrors.companyName}</p>
        <MDBInput
          wrapperClass='mb-4'
          id='form6Example3'
          label='Company name'
          name='companyName'
          type='text'
          value={data.companyName}
          onChange={onChangeData}
          className={data.companyName !== '' ? 'filled-input' : ''}
        />

        <p className='error-message'>{formErrors.mobile}</p>
        <MDBInput
          wrapperClass='mb-4'
          type='tel'
          id='form6Example6'
          label='Phone'
          name='mobile'
          required
          value={data.mobile}
          className={data.mobile !== '' ? 'filled-input' : ''}
          onChange={onChangeData}
        />

        <p className='error-message'>{formErrors.message}</p>
        <MDBInput
          wrapperClass='mb-4'
          textarea='true'
          id='form6Example7'
          rows={10}
          required
          name='message'
          value={data.message}
          className={
            data.message !== ''
              ? 'filled-input messgae-container'
              : 'messgae-container'
          }
          onChange={onChangeData}
          label='Your message'
        />

        <MDBCheckbox
          wrapperClass='mb-4'
          name='terms'
          id='form6Example8'
          label='I agree to the privacy policy.'
          defaultChecked
          onChange={onChangeData}
        />

        <button
          className='mb-4 bg-black form-request-demo-btn'
          type='submit'
          block
          onClick={sendDemoRequest}
        >
          Request demo
        </button>
      </form>
    </div>
  );
};
export default RequestDemoForm;
