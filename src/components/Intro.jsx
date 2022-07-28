import "./intro.css";
import React, { useRef,useEffect } from 'react'
import { color } from "@mui/system";
export default function Intro() {


  // two seperate pairs (split here) will change to two sets of different colors in interval
  const ref1a = useRef(null);
  const ref2a = useRef(null);
  
  const ref1b = useRef(null);
  const ref2b = useRef(null);

  let elem1a,elem1b,elem2a,elem2b;

  useEffect(() => {

    elem1a = ref1a.current;
    elem1b = ref1b.current;
    elem2a = ref2a.current;
    elem2b = ref2b.current;
  
    const interval = setInterval(() => {
      changeNameColors();
    }, 1000);

    return() => clearInterval(interval);
  },[]) // run once
  
  let generateRandomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);

  let set1Turn = true; // alternate between set changing color
  let set1Color = generateRandomColor();
  let set2Color = generateRandomColor();
  let setNewColor = generateRandomColor();



  function changeNameColors(){
    if(set1Turn === true){
      elem1a.style.color = set1Color;
      elem2a.style.color = set1Color;
    }
    else{
      elem1b.style.color = set2Color;
      elem2b.style.color = set2Color;
      // generate new color after second set matches color

      // alternate color, set 2 uses last color of set1, but will not match at the same instance.
      set2Color = set1Color;
      set1Color = setNewColor;
      setNewColor = generateRandomColor();
    }

    set1Turn = !set1Turn; // change boolean value
  }




  return (
    <div className = "intro" id = "intro">

    <div className="set1">  
    <div className="firstName" id = "fn" ref = {ref1a}  >Armando</div>
    <div className="lastName" id = "ln" ref = {ref1b}>Lopez</div>
    </div>
    <div className="set2">
    <div className="title1" id = "t1" ref = {ref2b}>Computer</div>
    <div className="title2" id = "t2" ref = {ref2a}>Scientist</div>
    </div>

    <div className="splitPage1">

    <div className="homeImage">
    </div>
    <div className="myInfo">
      <div id = "infoLabel">Education
      <div id = "infoDescription"> Cal State University Fullerton - Bachelors in Computer Science - June 2021.</div> </div>

      <div id = "newLine">
      <div id = "infoLabel">Software Languages:
      <div id = "infoDescription">C++/C, Java, Python, Javascript, Html, Css.</div> </div> </div>

      <div id = "newLine">
      <div id = "infoLabel">IDE / Programs used:
      <div id = "infoDescription">Vs code, MS Visual Studios, Eclipse, Netbeans, Jupyter Notebook, Rguroo, Github.</div> </div> </div>

      <div id = "newLine">
      <div id = "infoLabel">Libraries:
      <div id = "infoDescription">Three Js, React, Pygame</div> </div> </div>

    </div>

    </div>






    </div>
  )
}
