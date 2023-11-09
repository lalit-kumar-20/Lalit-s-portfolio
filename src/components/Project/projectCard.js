import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCards = (props) => {
  return (
    <Card
      style={{
        marginTop: "3rem",
        boxColor: "#4DD0E1",
        borderRadius: "1rem",
        backgroundColor: "#99ccff",
        height: "38rem",
        padding: "0.4rem",
        marginBottom: "0.1rem",
      }}
      className="project-card-view"
    >
      <Card.Img
        style={{ borderRadius: "1rem" }}
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title style={{ display: "flex", justifyContent: "center" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          {props.ghLink && (
            <Button
              variant="secondary"
              href={props.ghLink}
              target="_blank"
              style={{ marginRight: "1.5rem" }}
            >
              <BsGithub style={{ display: "inline-block" }} /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button variant="secondary" href={props.demoLink} target="_blank">
              <CgWebsite style={{ display: "inline-block" }} /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectCards;
