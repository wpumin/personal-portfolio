import React from "react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { name: "Home", path: "/", icon: "fa-home" },
  { name: "About", path: "/about", icon: "fa-user" },
  { name: "Portfolio", path: "/portfolio", icon: "fa-briefcase" },
  { name: "Contact", path: "/contact", icon: "fa-envelope-open" },
  // { name: "Blog", path: "/blog", icon: "fa-comments" },
];

const Header = ({ data }) => {
  const location = useLocation();

  return (
    <header className="header" id="navbar-collapse-toggle">
      {/* Fixed Navigation Starts */}
      <ul className="icon-menu d-none d-lg-block revealator-once revealator-delay1">
        {items.map((item, index) => (
          <li
            className={`icon-box ${location.pathname == item.path && "active"}`}
          >
            <i className={`fa ${item.icon}`} />
            <Link to={item.path}>
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* Fixed Navigation Ends */}
      {/* Mobile Menu Starts */}
      <nav role="navigation" className="d-block d-lg-none">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            {items.map((item, index) => (
              <li
                className={`icon-box ${
                  location.pathname == item.path && "active"
                }`}
              >
                <Link to={item.path}>
                  <i className={`fa ${item.icon}`} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};

export default Header;
