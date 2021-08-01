/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="row m-4 p-5 shadow">
        <div className="col-1"></div>
        <div className="text-center col">
          <p className="bold-text">
            email: kevin.lawrence404@gmail.com
          </p>
        </div>
        <div className="text-center col-2 icon">
          <a href="tel:(404)731-5478" className="fa fa-phone"></a>
        </div>
        <div className="text-center col-2 icon">
          <a href="https://github.com/kingkevin05" className="fa fa-github"></a>
        </div>
        <div className="text-center col-2 icon">
          <a
            href="https://www.linkedin.com/in/kevinlawrence05/"
            className="fa fa-linkedin"
          ></a>
        </div>
        <div className="col-1"></div>
      </div>
    </footer>
  );
}

export default Footer;
