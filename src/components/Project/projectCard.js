import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import styles from "./Project.styles";

const ProjectCards = (props) => {
  return (
    <Card style={styles.CardStyles}>
      <Card.Img
        style={styles.CardImage}
        variant="btn btn-dark"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title style={styles.CardTitle}>{props.title}</Card.Title>
        <Card.Text style={styles.CardText}>{props.description}</Card.Text>
        <div style={styles.CardButtonDivStyle}>
          {props.ghLink && (
            <Button
              variant="btn btn-dark"
              href={props.ghLink}
              target="_blank"
              style={styles.CardButtonStyle}
            >
              <BsGithub style={styles.CardGithubStyle} /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="btn btn-dark"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite style={styles.CardCgWebsite} /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectCards;
