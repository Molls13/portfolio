import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Techskill from './components/Techskill';
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from "react-scroll";
import TimeLine from './components/TimeLine';

function App() {
  return (
    <>
      <Link to="intro" spy={true} smooth={true}>
        <IoIosArrowUp className='arrowUp' />
      </Link>
      <Intro />
      <About />
      <TimeLine />
      <Techskill />
      <Projects />
      <Contact />
      <div className='arrowWrapper'>
        <Link to="intro" spy={true} smooth={true}>
          <IoIosArrowUp className='arrowUpMobile' />
        </Link>
      </div>
    </>
  );
}

export default App;
