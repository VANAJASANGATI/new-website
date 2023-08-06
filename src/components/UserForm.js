import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import './Userform.css';
const UserForm = (props) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    phonenumber: '',
  });

  const { username, email, phonenumber } = data;

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const onSubmitHandler = (e) => {
    alert('Details submitted Successfully');
    e.preventDefault();
    console.log(data);
    props.setShowForm(false);
  };
  return (
    <>
      <div className='form-container '>
        <div className='form'>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label sm='2'>User name</Form.Label>
                  <Form.Control
                    name='username'
                    onChange={onChangeHandler}
                    type='text'
                    placeholder='Enter your name'
                    value={username}
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name='email'
                    onChange={onChangeHandler}
                    value={email}
                    type='email'
                    placeholder='Enter your email id'
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name='phonenumber'
                    onChange={onChangeHandler}
                    value={phonenumber}
                    placeholder='Enter your phone number'
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Form.Label>Enter your query</Form.Label>
                  <Form.Control as='textarea' rows={3} />
                </Form.Group>
              </Form>
              <Button variant='dark' onClick={onSubmitHandler} type='submit'>
                Submit
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default UserForm;
