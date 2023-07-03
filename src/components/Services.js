import ServiceItem from "./ServiceItem"

const servicesList = [{id:1, serviceImg:"https://files.techmahindra.com/static/img/Cloud-Migration.png", 
    serviceName:"Cloud",
    description: "description:By combining a comprehensive suite of cloud offerings across the Cloud lifecycle, we provide our clients a unique transformation roadmap aligned to their business goals",},
    {id:2, serviceImg:"https://files.techmahindra.com/static/img/flex-dwp-icon.png", 
    serviceName:"FLEX Digital Workplace Services",
    description: "Tech Mahindra offers the full range of Digital Workplace Services right from procuring the device to provisioning it anywhere, supporting the estate & deprovisioning it using AI ensuring best user experience",},
    {id:3, serviceImg:"https://files.techmahindra.com/static/img/network-enterprise.png", 
    serviceName:"Enterprise Network Services",
    description: "As a leader in the Network services domain, Tech Mahindra is well- positioned to assist enterprises with their network transformation needs. We cover the entire Networks Lifecycle – from Managed Services to Transformation",},
    {id:4, serviceImg:"https://files.techmahindra.com/static/img/network-enterprise.png", 
    serviceName:"Data Center Services",
    description: "Tech Mahindra helps enterprises extract the maximum value from their data center investments by helping them streamline operations and modernize their infrastructure",}
,{id:5, serviceImg:"https://files.techmahindra.com/static/img/network-enterprise.png", 
serviceName:"Enterprise Security Services",
description: "Tech Mahindra’s comprehensive value-chain advanced security outsourcing services covers the entire lifecycle - Assess, Prevent, Detect, and Respond & Recover. Our services range from Consulting & Implementation to Managed Services",}]


const Services=()=>{
    return(<div >
        <ul className="services-container">{servicesList.map(eachService=><l1><ServiceItem key={eachService.id}
         serviceDetails={eachService}> 
        </ServiceItem></l1>
       
        )}</ul>
    </div>) 
}
export default Services