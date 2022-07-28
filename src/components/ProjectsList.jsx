import React from 'react'
import "./projectsList.css"

export default function ProjectsList({title,active,setSelected}) {
  return (
    <li className={active ? "projectsList active" : "projectsList"} 
    onClick = {()=>setSelected(title)}>
        {title} 
    </li>
  )
}
