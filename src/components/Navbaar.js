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
import style from "./Navbar.Style";

const NavBaar = () => {
  return (
    <>
      <Navbar fixed="top" expand="md">
        <img style={style.NavbarlogoStyle} src={profilelogo} alt="brand" />
        <Container>
          <nav
            style={style.NavbarTextStyle}
            className="navbar navbar-lg navbar-dark  "
          >
            <img
              style={style.NavbarRoutinglogoStyle}
              src={logo}
              className="img-fluid logo "
              alt="brand"
            />

            <a
              style={style.NavbarAnchorTagStyle}
              className="navbar-brand ms-auto"
              href="/"
            >
              Home
            </a>

            <img
              style={style.NavbarRoutinglogoStyle}
              src={aboutlogo}
              className="img-fluid logo "
              alt="brand"
            />

            <a
              style={style.NavbarAnchorTagStyle}
              className="navbar-brand ms-auto"
              href="/about"
            >
              About
            </a>
            <img
              style={style.NavbarRoutinglogoStyle}
              src={projectlogo}
              className="img-fluid logo "
              alt="brand"
            />

            <a
              style={style.NavbarAnchorTagStyle}
              className="navbar-brand ms-auto"
              href="/project"
            >
              {" "}
              Projects
            </a>
            <img
              style={style.NavbarRoutinglogoStyle}
              src={resumelogo}
              className="img-fluid logo "
              alt="brand"
            />

            <a
              style={style.NavbarAnchorTagStyle}
              className="navbar-brand ms-auto"
              href="/resume"
            >
              {" "}
              Resume
            </a>

            <img
              style={style.NavbarRoutinglogoStyle}
              src={bloglogo}
              className="img-fluid logo "
              alt="brand"
            />

            <Button
              href="https://medium.com/@lalit007lodhi"
              target="_blank"
              rel="noreferrer"
              className="btn bg-transparent"
              style={style.NavbarMediumButtonStyle}
            >
              Blogs
            </Button>

            <Button
              style={style.NavbarGithubButtonStyle}
              href="https://github.com/lalit-kumar-20"
              target="_blank"
              className="fork-btn-outer"
            >
              <>
                <div style={style.NavbarGithubIconStyle}>
                  <CgGitFork style={style.NavbarGithubIconAlignStyle} />
                  <AiFillStar style={style.NavbarGithubIconAlignStyle} />
                </div>
              </>
            </Button>
          </nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBaar;
