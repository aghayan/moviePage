import React from "react";
import { Link } from "react-router-dom";
import "./components_style/header.scss";
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();

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

      <div className="sign">
        <button className="white" onClick={() => navigate("/")}>
          LOG IN
        </button>
        <button className="red" onClick={() => navigate("/signin")}>
          SIGN UP
        </button>
      </div>
    </div>
  );
}
