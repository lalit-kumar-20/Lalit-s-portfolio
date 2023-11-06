import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../Assests/home.png";
import aboutlogo from "../Assests/info.png";
import resumelogo from "../Assests/resume.png";
import projectlogo from "../Assests/project.png";
import bloglogo from "../Assests/blog.png";
import profilelogo from "../Assests/logoProfile.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";

import { AiFillStar } from "react-icons/ai";

function NavBaar() {
  return (
    <>
      <Navbar fixed="top" expand="md">
        <img
          style={{
            alignItems: "center",
            marginLeft: "3rem",
            display: "flex",
            borderRadius: "5rem",
            width: "9rem",
            height: "5.7rem",
          }}
          src={profilelogo}
          alt="brand"
        />
        <Container>
          <nav
            style={{
              marginLeft: "23rem",
              marginTop: "0rem",
              fontFamily: "sans-serif",
              fontSize: "large",
            }}
            className="navbar navbar-lg navbar-dark  "
          >
            <img
              style={{
                alignItems: "center",
                display: "flex",
                borderRadius: "5rem",
                width: "30px",
                height: "30px",
              }}
              src={logo}
              className="img-fluid logo "
              alt="brand"
            />

            <a
              style={{
                marginRight: "3.5rem",
                marginLeft: "0.4rem",
                marginTop: "0rem",
              }}
              className="navbar-brand ms-auto"
              href="/"
            >
              Home
            </a>

            <img
              style={{
                alignItems: "center",
                display: "flex",
                borderRadius: "5rem",
                width: "30px",
                height: "30px",
              }}
              src={aboutlogo}
              className="img-fluid logo "
              alt="brand"
            />

            <a
              style={{
                marginRight: "3.5rem",
                marginLeft: "0.4rem",
                marginTop: "0rem",
              }}
              className="navbar-brand ms-auto"
              href="/"
            >
              About
            </a>
            <img
              style={{
                alignItems: "center",
                display: "flex",
                borderRadius: "5rem",
                width: "30px",
                height: "30px",
              }}
              src={projectlogo}
              className="img-fluid logo "
              alt="brand"
            />

            <a
              style={{
                marginRight: "3.5rem",
                marginLeft: "0.4rem",
                marginTop: "0rem",
              }}
              className="navbar-brand ms-auto"
              href="/"
            >
              {" "}
              Projects
            </a>
            <img
              style={{
                alignItems: "center",
                display: "flex",
                borderRadius: "5rem",
                width: "30px",
                height: "30px",
              }}
              src={resumelogo}
              className="img-fluid logo "
              alt="brand"
            />

            
              <Link style={{
                marginRight: "2.5rem",
                marginLeft: "0rem",
                color:"white"

              }} className="nav-link" to="/resume">Resume</Link>
              
            <img
              style={{
                alignItems: "center",
                display: "flex",
                borderRadius: "5rem",
                width: "30px",
                height: "30px",
                
              }}
              src={bloglogo}
              className="img-fluid logo "
              alt="brand"
            />

           
              <Button
                href="https://medium.com/@lalit007lodhi"
                target="_blank"
                rel="noreferrer"
                className="btn bg-transparent"
                style={{color:"white", marginRight:"3.1rem",border: "1px solid black"}}
              >Blogs</Button>
              
            

            <Button
              style={{ backgroundColor: "#706bb2", width: "4.2rem",border: "1px solid black" }}
              href="https://github.com/lalit-kumar-20"
              target="_blank"
              className="fork-btn-outer"
            >
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CgGitFork style={{ fontSize: "1.2em", color: "white" }} />
                  <AiFillStar style={{ fontSize: "1.1em", color: "white" }} />
                </div>
              </>
            </Button>
          </nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBaar;
