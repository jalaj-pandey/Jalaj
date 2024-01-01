import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesomee">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <motion.input  
          whileFocus={{
            background: [ 
              "linear-gradient(to right, #4158D0 -200%, #C850C0 -100%, #FFCC70 100%)",
              "linear-gradient(to right, #4158D0 -100%, #C850C0 0%, #FFCC70 200%)",
              "linear-gradient(to right,  #4158D0 0%, #C850C0 100%, #FFCC70 300%)",
            ],
          }}
          transition={{
        background: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          from:
            "linear-gradient(to right, #fff -200%, #fff -100%, #fff 0%, #fff 100%)",
        },
      }}
 type="text" name="user_name" className="user"  placeholder="Name"/>
          <motion.input  
          whileFocus={{
            background: [ 
              "linear-gradient(to right, #4158D0 -200%, #C850C0 -100%, #FFCC70 100%)",
              "linear-gradient(to right, #4158D0 -100%, #C850C0 0%, #FFCC70 200%)",
              "linear-gradient(to right,  #4158D0 0%, #C850C0 100%, #FFCC70 300%)",
            ],
          }}
          transition={{
        background: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          from:
          "linear-gradient(to right, #fff -200%, #fff -100%, #fff 0%, #fff 100%)",
        },
      }}
      type="email" name="user_email" className="user" placeholder="Email"/>
          <motion.textarea  
          whileFocus={{
            background: [ 
              "linear-gradient(to right, #4158D0 -200%, #C850C0 -100%, #FFCC70 100%)",
              "linear-gradient(to right, #4158D0 -100%, #C850C0 0%, #FFCC70 200%)",
              "linear-gradient(to right,  #4158D0 0%, #C850C0 100%, #FFCC70 300%)",
            ],
          }}
          transition={{
        background: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          from:
            "linear-gradient(to right, #fff -200%, #fff -100%, #fff 0%, #fff 100%)",
        },
      }} name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" onClick={() => window.location.replace("/#home")} className="btn btn-color-2 project-btn"/>
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;