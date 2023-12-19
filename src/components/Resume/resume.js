import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../../Assests/../Assests/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import style from "./Resume.style";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container style={{marginTop:'5rem'}}>
        <Row style={style.RowStyle}>
          <Button href={pdf} target="_blank" style={style.Button1Style}>
            <AiOutlineDownload style={style.ButtonIconStyle} />
            <h1 style={style.ButtonTextStyle}>Download CV</h1>
          </Button>
        </Row>

        <Row style={style.RowStyle}>
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />

            {/* <Page pageNumber={1} noData={<></>} /> */}
          </Document>
        </Row>

        <Row style={style.RowStyle}>
          <Button href={pdf} target="_blank" style={style.Button2Style}>
            <AiOutlineDownload style={style.ButtonIconStyle} />
            <h1 style={style.ButtonTextStyle}>Download CV</h1>
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;
