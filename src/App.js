import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Techskill from './components/Techskill';
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from "react-scroll";

function App() {
  return (
    <>
    <Link to="intro" spy={true} smooth={true}>
      <IoIosArrowUp className='arrowUp'/>
    </Link>
      <Intro />
      <About />
      <Techskill />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
