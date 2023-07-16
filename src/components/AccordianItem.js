import Accordion from 'react-bootstrap/Accordion';

import "./Accordion.css"
const AccordianItem=(props)=>{
    const {solution,description}=props
    return(<>  
    <Accordion className="accordian" >
    <Accordion.Item eventKey="0"  >
      <Accordion.Header >{solution}</Accordion.Header>
      <Accordion.Body>
        {description}
      </Accordion.Body>
    </Accordion.Item>
    
    </Accordion></>)
}
export default AccordianItem