import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
import iNoteBookIcon from "../../Assests/iNotebook_image.png";
import MSDesigner_Logo from "../../Assests/MS_Designer_logo.png";
import GlobalNews_logo from "../../Assests/global_news_logo.png";
import MR_Engine_logo from "../../Assests/MR_Engine.jpeg";
import ZipCodeImg from "../../Assests/ZipCodeinfoImage.png";
import TextAnalyzer_logo from "../../Assests/Text_Analyzer_logo.jpeg";
import QPG from "../../Assests/QPG.png";
import PCD from "../../Assests/PCD.png";
import SMS from "../../Assests/SMS.png";

import styles from "./Project.styles";

const Project = () => {
  return (
    <div >
      <Container style={styles.projectContainerStyle}>
        <Row style={styles.projectContentRowStyle}>
          <h1 style={styles.projectheadingRowStyle}>
            My Recent <strong style={styles.projectStrongStyle}>Works </strong>
          </h1>
        </Row>
        <Row style={styles.projectHeadingRowStyles}>
          <p style={styles.projectCardParaStyles}>
            Here are a few projects I've worked on recently.
          </p>
        </Row>
        <Row style={styles.projectCardContentStyles}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MSDesigner_Logo}
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
              imgPath={ZipCodeImg}
              isBlog={false}
              title="ZipCodeInfo_WebApp"
              description="ZipCodeInfo is a Full Stack web application based on MERN Technologies  that takes input as ZipCode from user and fetch the details regarding that Zip Code with the help of an API. The API return a json having the list of the area that falls under that entered Zip Code.There is a beautiful loader functionality while fetching the info related to that Zip Code. Incase of no info there is a message saying info not found!."
              ghLink="https://github.com/lalit-kumar-20/ZipCodeInfo_WebApp"
              demoLink="https://zip-code-info-web-app-pfum.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SMS}
              isBlog={false}
              title="Student Management System"
              description="A powerful Login and Authentication System Role based authentication and authorization. Student Details Displays the details of all the students, and provides following services: Adding a new student, Editing / Modifying the data of an existing student, Deleting / Removing the data of an existing student."
              ghLink="https://github.com/lalit-kumar-20/Student-management-system"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QPG}
              isBlog={false}
              title="Question Paper Generator"
              description="QPG is a web application is Full Stack MERN Aplication that store a number of questions in a Question Store. A question have the following attributes {question, subject, topic, difficulty, marks}. The Question paper Generator looks for questions in the Question Store and then generate the question paper based on the total marks and the distribution of marks based on *Difficulty Levels*"
              ghLink="https://github.com/lalit-kumar-20/Question_Paper_Generator"
              demoLink="https://question-paper-generator-eight.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PCD}
              isBlog={false}
              title="Profile Card Displayer"
              description="It is majorily a Front-End Web Application that display the Profile Card fetched from the dummy data present there in json file.This application has the functionalities like add to favorites,update the card, and delete the card. This application is designed using CSS and it is a beautiful responsive web Application"
              ghLink="https://github.com/lalit-kumar-20/NeenOpal_task"
              demoLink="https://neen-opal-task.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextAnalyzer_logo}
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
              imgPath={MR_Engine_logo}
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
              imgPath={GlobalNews_logo}
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
};

export default Project;
