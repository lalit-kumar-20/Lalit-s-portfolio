import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
 import iNoteBookIcon from "../../Assests/iNotebook_image.png";



const Project=()=>{

  return (
    <div>
      <Container style={{color:"white",marginBottom:"2rem"}}>
      <Row style={{ justifyContent: "center", position: "relative" ,marginTop:"10rem"}}>
      <h1 style={{fontSize:"2.7rem",marginLeft:"2rem",}}>
          My Recent <strong style={{color:"#4DD0E1",fontFamily:"cursive"}}>Works </strong>
        </h1>
       
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" ,marginTop:"1rem"}}>
        <p style={{ color: "white" ,marginLeft:"2rem",fontSize:"1.3rem"}}>
          Here are a few projects I've worked on recently.
        </p>         
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px",color:"black" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNoteBookIcon}
              isBlog={false}
              title="Microsoft Designer Web App"
              description="During my internship at Microsoft, I had the exciting opportunity to work on a live project Designer App.
              I was part of Web Team where I worked on improving the SEO performance of Designer on search engine
              by building an Action focused web app. An app for BGR removal that does the job instantly and then
              prompts users to Sign-in/Sign-up/continue their edit on a full fledged designer app.
              Please find the link of Microsoft Designer App."
            //   ghLink="https://designer.microsoft.com/"
              demoLink="https://designer.microsoft.com/"
            />
            </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNoteBookIcon}
              isBlog={false}
              title="iNoteBook"
              description="iNotebook is a Full Stack web application based on MERN Technologies  that allows users to save important notes or other text with the title, description and tag. If new user visit the application just by creating the account user can save their notes and next time the same user just
              by login can fetch their saved notes. A user can create, update and delete the notes.It is pretty much responsive and
              user friendly web app."
              ghLink="https://github.com/lalit-kumar-20/iNotebook"
              demoLink="https://dulcet-druid-8a8e3c.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNoteBookIcon}
              isBlog={false}
              title="Text Analyzer"
              description="Text-Analyzer Website
              it is a website having its beautiful features like-
              when we enter our text in the box.
              then we can convert(by clicking on the bottoms) our text into Lowercase, Uppercase
              Copy the whole text, Remove the Whole text in single click
              can remove the extra space between the them
              and the best part is we can count the number of character and words
              in the text it also the average time taken to read that text.
              and also see its preview in below lines.
              "
              ghLink="https://github.com/lalit-kumar-20/Text-Analyser-"
            //   demoLink="https://github.com/lalit-kumar-20/Text-Analyser-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{width:"5rem"}}
              imgPath={iNoteBookIcon}
              isBlog={false}
              title="Movie Recommendation Engine"
              description="Recommendation Engine is a machine learning project which suggest the genres of movies according to your
              taste by analyzing the previous content watched by the users.
              The model recommends a set of movies to user based on Machine Learning Techniques.This Model is built using the collaborative filtering based on the Latent-Factor-Model"
              ghLink="https://github.com/lalit-kumar-20/Recommendation-Engine-Latent-Factor-Model"
            //   demoLink="https://github.com/lalit-kumar-20/Recommendation-Engine-Latent-Factor-Model"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNoteBookIcon}
              isBlog={false}
              title="Global News"
              description="It a website named Global-News
              it shows the top Headline(with its image ,short description, author, publishing date and authority) news of every category
              like- Entertainment, Science, Technology, Sport, Health, General News etc.
              By clicking on the Read More you direct to the news article of the official authority.
              it has some features Nevigation, infinite Scroll, Spinner, Loader.
              It seems like a pretty Website."
              ghLink="https://github.com/lalit-kumar-20/Global-News-Website"
            //   demoLink="https://github.com/lalit-kumar-20/Global-News-Website"
            />
          </Col>
          
          </Row>
          
      </Container>
    </div>
  );
}

export default Project;




