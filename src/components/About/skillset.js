import React from 'react'
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiC,
  SiMysql,
  SiTypescript,
  SiSqlite,
  SiJest,
  SiNextdotjs,
  
} from "react-icons/si";

import { FaServer } from "react-icons/fa";

 const skillset = () => {
  return (
    <>
    
    <Row style={{ marginLeft:"1.5rem",justifyContent: "center", marginTop:"3rem",color:"white"}}>
   <div>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}} >
      <SiC style={{marginTop:"1.5rem",marginLeft:"3.5rem",width:"4rem",height:"5rem"}} />
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}} >
      <CgCPlusPlus style={{marginTop:"1.5rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col  style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <DiJavascript1 style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col  style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <SiTypescript style={{marginTop:"1.5rem",marginLeft:"3.5rem",width:"4.5rem",height:"4.5rem"}} />
    </Col>
    <Col  style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <DiReact style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    </div>
    <div style={{marginTop:"2rem"}}>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <DiNodejs style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <FaServer style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <SiSqlite style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <SiMysql style={{marginTop:"1.3rem",marginLeft:"3rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <DiMongodb style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    </div>

    <div style={{marginTop:"2rem"}}>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}}>
      <DiGit style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}}/>
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}} >
      <SiJest style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}} >
      <SiNextdotjs style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    <Col style={{display: "inline-block",marginRight:"1.5rem",height:"8rem",width:"14rem",borderColor:"#4DD0E1",borderWidth:"0.1rem",borderRadius:"0.35rem",}} >
      <DiPython style={{marginTop:"1.3rem",marginLeft:"3.5rem",width:"5rem",height:"5rem"}} />
    </Col>
    </div>
  </Row>
  </>
  )
}

export default skillset
