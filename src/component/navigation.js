import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components_style/header.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import User  from "../header_Images/user.png"

export function Navigation() {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.movieReducer.UserData);
  const [show, setShow] = useState(false) ;

  function showUser() {
    return setShow(!show)
    
  }

  const renderUserSection = () => {
    if (userData) {
      return (
        <div className="user-info">
          <p>{userData.name}</p>
          <p>{userData.email}</p>
        </div>
      );
    } else {
      return (
        <div className="sign">
          <button className="white" onClick={() => navigate("/")}>
            LOG IN
          </button>
          <button className="red" onClick={() => navigate("/signin")}>
            SIGN UP
          </button>
        </div>
      );
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <h1>ARMFILMS</h1>
      </div>
      <div className="navig">
        <nav>
          <ul>
            <li>
              <Link to="/homeFilms" className="xxx">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutPage" className="xxx">
                About
              </Link>
            </li>
            <li>
              <Link to="/servicesPage" className="xxx">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contactPage" className="xxx">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="user_profile">
      <button className="prof_button" onClick={showUser}><img src={User}/> </button>
      {
        show ? <div className="sign">
          {renderUserSection()}
          <Link className="white" style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:'none'}} to={'/'}>Log Out</Link>       
        </div> : '' 
      }
      
    </div>
    </div>
  );
}
