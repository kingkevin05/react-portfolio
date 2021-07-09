import React from "react";
import monstera from "../../assets/images/monstera.png";
import swapmeet from "../../assets/images/swapmeet.png";
import note from "../../assets/images/note.png";
import weather from "../../assets/images/weather.png";
import budget from "../../assets/images/budget.png";
import weatherApp from "../../assets/images/weatherApp.png";
import planner from "../../assets/images/planner.png";

function projects() {
  return (
    <div className="container shadow px-4">
      <div className="row m-4 pt-5">
        <div className="col-3"></div>
        <div className="col-6 text-center mb-3">
          <h1 className="sub-title">projects</h1>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="card-group">
        <div
            className="card rounded m-4 project shadow-sm"
            style={{ width: "100%", backgroundColor: "#fbefcc9a" }}
          >
            <img src={monstera} className="card-img-top rounded" alt="monstera" />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://monstera2.herokuapp.com/"
                >
                  Monstera
                </a>
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/down-dive/monstera"
                >
                  View Code
                </a>
              </p>
            </div>
          </div>

          <div
            className="card rounded m-4 project shadow-sm"
            style={{ width: "100%", backgroundColor: "#fbefcc9a" }}
          >
            <img src={weather} className="card-img-top rounded" alt="weather" />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://kingkevin05.github.io/weather-or-not/"
                >
                  Weather or Not
                </a>
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/kingkevin05/weather-or-not"
                >
                  View Code
                </a>
              </p>
            </div>
          </div>

          <div
            className="card rounded m-4 project shadow-sm"
            style={{ width: "100%", backgroundColor: "#fbefcc9a" }}
          >
            <img src={budget} className="card-img-top rounded" alt="budget" />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://immense-crag-55361.herokuapp.com/"
                >
                  Budget Tracker
                </a>
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/kingkevin05/budget-tracker"
                >
                  View Code
                </a>
              </p>
            </div>
          </div>

          <div
            className="card rounded m-4 project shadow-sm"
            style={{ width: "100%", backgroundColor: "#fbefcc9a" }}
          >
            <img src={note} className="card-img-top rounded" alt="note" />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://thawing-lake-64142.herokuapp.com/"
                >
                  Note Taker
                </a>
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/kingkevin05/Express.js-Challenge-Note-Taker"
                >
                  View Code
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div
            className="card rounded m-4 project shadow-sm"
            style={{ width: "100%", backgroundColor: "#fbefcc9a" }}
          >
            <img
              src={swapmeet}
              className="card-img-top rounded"
              alt="draftRoom"
            />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://serene-brushlands-34437.herokuapp.com/"
                >
                  Swap Meet
                </a>
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/kingkevin05/swap-meet"
                >
                  View Code
                </a>
              </p>
            </div>
          </div>

          <div
            className="card rounded m-4 project shadow-sm"
            style={{ width: "100%", backgroundColor: "#fbefcc9a" }}
          >
            <img
              src={weatherApp}
              className="card-img-top rounded"
              alt="weatherApp"
            />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://kingkevin05.github.io/local-weather/"
                >
                  Local Weather
                </a>
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/kingkevin05/local-weather"
                >
                  View Code
                </a>
              </p>
            </div>
          </div>

          <div
            className="card rounded m-4 project shadow-sm"
            style={{ width: "100%", backgroundColor: "#fbefcc9a" }}
          >
            <img src={planner} className="card-img-top rounded" alt="planner" />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://kingkevin05.github.io/wk-5-challenge/"
                >
                  Work Day Planner
                </a>
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/kingkevin05/wk-5-challenge"
                >
                  View Code
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;
