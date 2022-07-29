import React from 'react'
import "./contact.css";
import {useState,useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  
  const form = useRef(null);

  const [message,setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // prevent default action, refresh page

    
    emailjs.sendForm('service_tmm87yr', 'template_u4hb4xf', form.current, '5i1L4RsfQf71nK2uF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      setMessage(true);
      e.target.reset();

      // remove the message for new email to be sent
      setTimeout(()=> {
        setMessage(false);
      },5000);

    };



  return (
    <div className="contact" id = "contact">

    <div className="leftSide">
    </div>
    <div className="contactBox">
    <h1>Send Me An Email!</h1>
    <form ref = {form} onSubmit = {sendEmail}>
        <input type = 'text' id = "name" placeholder='Name' name = "name" required/>
        <input type = 'text' id = "email" placeholder='Email' name = "email" required/>
        <textarea id = "message" placeholder='Message' name = "message" required> </textarea>
        <button id = "button" type = "submit">Send</button>
    </form>
    {message && <div id = "confirmSent">Email Sent! <br></br> I will reply as soon as I see this email.</div>}
    </div>
    <div className="rightSide">
    </div>


    </div>
  )

}
