import "./projects.css";
import {useEffect,useState } from "react";
import React from 'react'
import ProjectsList from "./ProjectsList";
import { originalWebsite,dragonGame,connectFour,blackjackAi,chatBot } from "../projectsData";

export default function Projects() {

const [selected,setSelected] = useState("Original Website");
const [data,setData] = useState(originalWebsite);

const list = [

  {
    title: "Original Website",
  },
  {
    title: "Dragon Game",
  },
  {
    title: "Connect Four",
  },
  {
    title: "BlackJack Ai",
  },
  {
    title: "Chat-Bot",
  }  
];
useEffect(()=>{
  switch(selected){
    case "Original Website":
      setData(originalWebsite);
      break;
    case "Dragon Game":
      setData(dragonGame);
      break;
    case "Connect Four":
      setData(connectFour);
      break;
    case "BlackJack Ai":
      setData(blackjackAi);
      break;
    case "Chat-Bot":
      setData(chatBot);
      break;
    default:
      setData(originalWebsite);

  }

},[selected])

  return (
    <div className = "projects" id = "projects">
      <h1> Projects </h1>
      <ul>
        
        {list.map(item=>(
          <ProjectsList 
          title = {item.title} 
          active = {selected === item.title} // Is selected = current title? T/F (sent)
          setSelected = {setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
        <div className={"item " + (data.length < 3 ? "active" : "")}> 
          <img src={d.img} height = "100%" width = "100%" alt="project_image" />
        </div> 
        ))}

      </div>
          <div className="projectDescription">
          {data[0].projectDescription}
          </div>
          <a class="cta" id="githubButton" href={data[0].link} >Go to Source Code!</a>
      </div>
  )
}
