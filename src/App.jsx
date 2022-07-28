import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Menu from './components/Menu';
import Contact from './components/Contact';
import {useState} from "react";
function App() {
  const [menuStatus,setMenuStatus] = useState(false);

  return (

    <div className="app">
      <NavBar menuStatus = {menuStatus} setMenuStatus = {setMenuStatus}/>
      <Menu menuStatus = {menuStatus} setMenuStatus = {setMenuStatus}/>
      <div className="sections">
        <Intro/>
        <Courses/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
