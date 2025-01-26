import { LOGO_URL } from "../utils/constants";
import React from 'react';
import {useState} from "react";
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
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-Us</li>
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
