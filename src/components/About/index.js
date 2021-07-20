import React from 'react'
import profile from "../../assets/images/kevin.jpeg";

function About() {
  return (
    <section>
    <div className="row m-4 pt-5">
      <div className="col-3"></div>
      <div className="col-6 text-center mb-3">
          <h1 className="sub-title">about me</h1>
      </div>
      <div className="col-3"></div>
    </div>
    <div className="container shadow">
      <div className="row">
      {/* <div className="col-12">
        <p className="m-4 p-4 text-center bold-text">
        Hello my name is Kevin Lawrence and I am a full-stack web developer currently seeking opprotunities in front-end or back-end web development . I currently reside in Oakland California where I've recently completed the Full Stack web development bootcamp at UC Berkeley. Before moving to the bay area I got my Bacholors Degree in media arts and animation from the Art Institute of Califronia Hollywood. Besides being a creative person I also would consider myself very tech/computer savy. I got into coding becuase I enjoy figuring out how to make things work as well problem solving. After completing the bootcamp I've  discovered that my strengths in desgin has translated into being very proficient in front web development especially in react.js.
        </p>
      </div> */}
        <div className="col-5">
            <img src={ profile } className="img-fluid rounded m-4 p-4" style={{ width: "100%" }} alt="cover" />
        </div>
        <div class="col-6">
          <div class="row">
            <p className="m-4 p-4 col-12 bold-text">
            Hello my name is Kevin Lawrence and I am a full-stack web developer currently seeking opportunities in front-end or back-end web development . I currently reside in Oakland California where I've recently completed the Full Stack web development bootcamp at UC Berkeley. Before moving to the bay area I got my Bachelors Degree in media arts and animation from the Art Institute of California Hollywood. Besides being a creative person I also would consider myself very tech/computer savvy. I got into coding because I enjoy figuring out how to make things work as well problem solving. After completing the bootcamp I've  discovered that my strengths in design has translated into being very proficient in front web development especially in react.js.
            </p>
          </div>
          <p className="m-4 p-4 col intro-text">
          Things I like to do: snacking, basketball, video games, fixing things, listening to soundclound, streaming, social gatherings, eating at the secret spots, drawing, and making friends
          </p>
        </div>
      </div>
    </div> 
    </section>
  )
};

export default About;