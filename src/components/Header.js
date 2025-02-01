import { LOGO_URL } from "../utils/constants";
import React from 'react';
import {useState} from "react";
import {Link} from "react-router"
 const Header = () => {
  const [btnName,setbtnName]=useState("Login")
  const [counter,setCounter]=useState(0);
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-image" alt="logo of company" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About-Us</Link></li>
          <li><Link to="/contact">Contact-Us</Link></li>
        </ul>
      </div>

      <button className="btnName" onClick={()=>{
        if(counter==0) {setbtnName("Logout"); setCounter(1);}
          else {setbtnName("Login");setCounter(0);}
      }}>
        {btnName}
        </button>
    </div>
  );
};
export default Header;
