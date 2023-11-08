
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiClion,
  SiJupyter,
  SiHeroku,
} from "react-icons/si";const tools = () => {
  return (


    <Row style={{ marginLeft:"1.5rem",justifyContent: "center", marginTop:"2.5rem",color:"white"}}>
    <div>
     <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}} >
       <SiVisualstudiocode style={{marginTop:"1.5rem",marginLeft:"3.5rem",width:"4rem",height:"5rem"}} />
     </Col>
     <Col  style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
       <SiGithub style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
     </Col>
     <Col  style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
       <SiClion style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
     </Col>
     <Col  style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
       <SiHeroku style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
     </Col>
     <Col  style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
       <SiJupyter style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
     </Col>
     </div>
   
   </Row>


//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//     <Col xs={4} md={2} className="tech-icons">
//       <SiMacos />
//     </Col>
//     <Col xs={4} md={2} className="tech-icons">
//       <SiVisualstudiocode />
//     </Col>
//     <Col xs={4} md={2} className="tech-icons">
//       <SiPostman />
//     </Col>
//     <Col xs={4} md={2} className="tech-icons">
//       <SiSlack />
//     </Col>
//     <Col xs={4} md={2} className="tech-icons">
//       <SiVercel />
//     </Col>
//   </Row>
  )
}

export default tools

