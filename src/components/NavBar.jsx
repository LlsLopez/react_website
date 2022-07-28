import "./navBar.css";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MouseIcon from '@mui/icons-material/Mouse';
import MenuIcon from '@mui/icons-material/Menu';

//style={{fill: ("white")}}

import React from 'react'

export default function navbar({menuStatus, setMenuStatus}) {
  return (
    <div className = "navBar" id = "navBar">
      <div className="wrapper">
        <div className="left">
          <a href = "#intro"> {/* <img alt = "logo" id = "link" src = {require("./mylogo.png")}></img> */}
          <img alt = "logo" id = "link" src = {require("./mylogo.png")}></img> 
          </a>
        </div>
        <div className="middle">
        <KeyboardIcon id = "icon_set1"></KeyboardIcon>
          Armando's Portfolio
        <MouseIcon id = "icon_set1"></MouseIcon></div>
        <div className="right" onClick={()=>setMenuStatus(!menuStatus)}>
          <MenuIcon id = "menu_icon" style={{fill: ("white")}} onClick={()=>setMenuStatus(!menuStatus)}></MenuIcon>
        </div>
      </div>
    </div>
  )
}
