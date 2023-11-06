import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../../Assests/../Assests/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page,pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container >
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", position: "relative" ,color:"#ff0066"}}>
          <Button
            href={pdf}
            target="_blank"
            style={{backgroundColor:"#4DD0E1",marginTop:"7.5rem",width:"15.4rem",height:"2.3rem",marginBottom:"3rem",}}
          >
         
            <AiOutlineDownload style={{ display: "inline-block",}}/>
            <h1 style={{marginLeft:"0.5rem",AlignItems:"center", display: "inline-block",}}>Download CV</h1>
          
          </Button>
        </Row>

        <Row style={{justifyContent: "center", position: "relative"}} >
          <Document  file={pdf} >
        
            <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
         
            {/* <Page pageNumber={1} noData={<></>} /> */}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" ,color:"#ff0066"}}>
          <Button
            href={pdf}
            target="_blank"
            style={{backgroundColor:"#4DD0E1",marginTop:"50rem",width:"15.4rem",height:"2.3rem",marginBottom:"3rem",}}
          >
         
            <AiOutlineDownload style={{ display: "inline-block",}}/>
            <h1 style={{marginLeft:"0.5rem",AlignItems:"center", display: "inline-block",}}>Download CV</h1>
          
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
