import "./courses.css";
import React from 'react'

export default function Courses() {

  return (
    <div className = "courses" id = "courses">
      
      <div className="headLabel">Courses Taken</div>

      <div className="splitScreen">

      <div className="coursesComputer">
      <div id = "courseLabel">Computer Science Courses</div>
      <div className="courseStyleA" id = "course">121/131 - Object Oriented/Data Structures</div>
      <div className="courseStyleB" id = "course">223J - Java Programming (Gui)</div>
      <div className="courseStyleC" id = "course">240 - Assembly</div>
      <div className="courseStyleA" id = "course">311/315 - Technical Writing for Computer Science / Ethics</div>
      <div className="courseStyleB" id = "course">323 - Compilers</div>
      <div className="courseStyleC" id = "course">332 - File Structures and Databases</div>
      <div className="courseStyleA" id = "course">335 - Algorithm Engineering</div>
      <div className="courseStyleB" id = "course">349 - Web Front-End</div>
      <div className="courseStyleC" id = "course">351 - Operating System Concepts</div>
      <div className="courseStyleA" id = "course">353 - Introduction to Computer Security</div>
      <div className="courseStyleB" id = "course">362 - Software Engineering</div>
      <div className="courseStyleC" id = "course">386 - Game Design</div>
      <div className="courseStyleA" id = "course">440 - Computer System Architecture</div>
      <div className="courseStyleB" id = "course">471 - Computer Communications</div>
      <div className="courseStyleC" id = "course">481 - Artificial Intelligence</div>
      <div className="courseStyleA" id = "course">483 - Introduction to Machine Learning</div>

      </div>


      <div className="coursesMath">
      <div id = "courseLabel">Math Courses</div>
      <div className="courseStyleA" id = "course">150A - Calculus</div>
      <div className="courseStyleB" id = "course">150B - Calculus</div>
      <div className="courseStyleC" id = "course">270A - Discrete Mathematics</div>
      <div className="courseStyleA" id = "course">270B - Linear Algebra</div>
      <div className="courseStyleB" id = "course">338 - Statistics</div>

      </div>
      </div>
      * Course Number and Description Based on CSUF's 2021 Catalog.

      
      
      
      
      </div>

  )
}
 