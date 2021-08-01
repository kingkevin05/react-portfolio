import React from "react";
import monstera from "../../assets/images/monstera.png";
import swapmeet from "../../assets/images/swapmeet.png";
import note from "../../assets/images/note.png";
import weather from "../../assets/images/weather.png";
import budget from "../../assets/images/budget.png";
import weatherApp from "../../assets/images/weatherApp.png";
import planner from "../../assets/images/planner.png";
import booksearch from "../../assets/images/booksearch.png";

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
              <p className= "text-center">
              An application to help preventing domestic violence, enabling users to send notifications and share their live location with their friends.
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
              <p className= "text-center">
              This app made to give the user activity recommendations based on weather in any given area.
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
              <p className= "text-center">
              The budget tracker app lets the user add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.
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
              <p className= "text-center">
              An application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
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
              src={booksearch}
              className="card-img-top rounded"
              alt="book search"
            />
            <div className="card-body">
              <p className="card-text">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://immense-falls-32190.herokuapp.com/"
                >
                  Book Search Engine
                </a>
              </p>
              <p className= "text-center">
              This a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server.
              </p>
              <p className="card-text repo">
                <a
                  to="route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-text"
                  href="https://github.com/kingkevin05/book-search-engine"
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
              <p className= "text-center">
              Swap Meet was created to help others meet, sell, and trade their possessions. Our services help people post listings through a simple user friendly interface and browse a variety of other listings in their area.
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
              <p className= "text-center">
              A weather dashboard that runs in the browser and features a dynamically updated HTML and CSS. It uses the OpenWeather One Call API to retrieve weather data for cities.
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
              <p className= "text-center">
              A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.
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
