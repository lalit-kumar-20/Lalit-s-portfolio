import "./App.css";
import Home from './components/Home/home'
import Navbar from './components/Navbaar'
import Footer from "./components/Footer"
import ParticleBackground from "./components/particles"
import Resume from "./components/Resume/resume"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <> 
    <Router>

        <ParticleBackground />  
        <Navbar/>
   
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route exact path="/resume" element={<Resume />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer/>
        </Router>
    </>
  );
}

export default App;
