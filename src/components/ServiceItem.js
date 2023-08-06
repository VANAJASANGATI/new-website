// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './Services.css';

const ServiceItem = (props) => {
  const { serviceDetails } = props;
  const { serviceImg, serviceName, description } = serviceDetails;
  // console.log(props)
  return (
    <>
      {/* <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={serviceImg} className='service-img'/>
    <Card.Body>
      <Card.Title>{serviceName}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card> */}

      <div className='service-card'>
        <div>
          <img className='service-img' src={serviceImg} alt='service' />
        </div>
        <div>
          <h1 className='heading'>{serviceName}</h1>
          <p>{description}</p>
          <button className='know-more-btn' type='submit'>
            KNOW MORE
          </button>
        </div>
      </div>
    </>
  );
};
export default ServiceItem;
