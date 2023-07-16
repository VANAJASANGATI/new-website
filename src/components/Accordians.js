// import Accordion from 'react-bootstrap/Accordion';
import AccordianItem from "./AccordianItem"
import "./Accordion.css"

const data=[{solution: 'AI/ML Forecasting & Demand Planning',
description: "Leading Indicator Driven, Greater Accuracy, Less Bias, Explainability, Greater Productivity and Improved Collaboration across Sales, Supply Chain and Finance around Forecasts and Gaps.", },
{ solution:"Supply Chain Planning, Control Tower, and Analytics",
  description:"Respond to Demand changes and supply disruptions in real time with advanced Demand/Supply Matching capabilities, analytics and scenario evaluation all aided by the most advanced supply chain digital twin in the market. ",
},
{solution:"Digital IBP",
description:"Bring Financial, Commercial and Supply Chain plans and forecasts together, evaluate revenue gap closure proposals, supply chain feasibility and cost scenarios, and make P&L optimal decisions – Run all IBP meetings on the system for better alignment, greater accountability.",},
{solution:"Revenue Analytics, Planning, and Gap Closure",
description:"Create and manage revenue plans across products, markets and channels and close gaps to plan by aligning Innovation, Pricing, Marketing, Promotions and Distribution initiatives and resources to market needs.",},
{solution:"Market &amp; Supply Chain Data Knowledge Foundation",
description:"Leading Indicators of Demand, External and Internal Data, Connecting the Dots, Creating an outside in view of Market, Customer, Competitor and Channel Intelligence to aid internal planning processes.",},

]

const Accordions = () =>{
return(<>

<div  className="accordian-container">
{data.map(eachAccordian=><AccordianItem key={eachAccordian.solution} solution={eachAccordian.solution} description={eachAccordian.description}></AccordianItem>)}
</div>

</>)
}
export default Accordions