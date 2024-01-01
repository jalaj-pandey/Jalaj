import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div  className="n-wrapper">
        <div className="n-left">
            <div className="n-name">JalajPandey</div>
        </div>
        <div className="n-right">
            <div className="n-list">
            <ul style={{listStyleType:'none'}}>
              <li onClick={() => window.location.replace("/#home")}>Home</li>
              <li onClick={() => window.location.replace("/#home")}>About</li>
              <li onClick={() => window.location.replace("/#Skills")}>Skills</li>
              <li onClick={() => window.location.replace("/#projects")}>Projects</li>
              <li onClick={() => window.location.replace("/#Others")}>Others</li>
                </ul>
            </div>
              <button style={{height:"7rem"}}
                className="navb btn btn-color-2 project-btn"
                onClick={() => window.location.replace("/#contact")}
              >
                Contact
              </button>
        </div>
    </div>
  )
}

export default Navbar