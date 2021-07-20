import React from "react";

function Navigation(props) {
  const navLinks = ["about", "projects", "contact", "resume"];
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm"
      style={{ backgroundColor: "#338adb63" }}
    >
      <h1 className="header-title px-2 mx-2">Kevin Lawrence</h1>
      <div
        className="collapse navbar-collapse justify-content-end p-2 mx-4"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav none">
          {navLinks.map(tabs => (
            <li className="nav-link" key={tabs}>
              <a
                href={"#" + tabs.toLowerCase()}
                onClick={() => props.setCurrentPage(tabs)}
                className={props.currentPage === tabs ? "active" : "nav-link"}
              >
                {tabs}
              </a>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
