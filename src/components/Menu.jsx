import './menu.css';
import React from 'react'

export default function Menu({menuStatus , setMenuStatus}) {
  return (
    <div className = {"menu " + (menuStatus && "active")}>

        <div className="pages">
        <div className="page" onClick = {()=> setMenuStatus(false)}>
        <a href="#intro">Home</a>  </div>
        <div className="page" onClick = {()=> setMenuStatus(false)}>
        <a href="#courses">Courses</a>  </div>
        <div className="page" onClick = {()=> setMenuStatus(false)}>
        <a href="#projects">Projects</a>  </div>
        <div className="page" onClick = {()=> setMenuStatus(false)}>
        <a href="#contact">Contact</a>  </div>
        </div>


    </div>
  )
}
