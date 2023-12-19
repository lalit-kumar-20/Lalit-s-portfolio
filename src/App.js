import "./App.css";
import Home from "./components/Home/home";
import Navbar from "./components/Navbaar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/particles";
import Resume from "./components/Resume/resume";
import About from "./components/About/about";
import Project from "./components/Project/project";
import ContactMe from "./components/ContactMe/contact_me";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contactme" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
