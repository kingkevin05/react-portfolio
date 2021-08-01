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
        <div className="col-5">
            <img src={ profile } className="img-fluid rounded m-4 p-4" style={{ width: "100%" }} alt="cover" />
        </div>
        <div class="col-6">
          <div class="row">
            <p className="m-4 p-4 col-12 bold-text">
            Hello my name is Kevin Lawrence, a front-end web developer leveraging a media arts background to build a more intuitive user interfaces on the web. Recently earned a certificate in full stack development from the University of California  Berkeley, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user interface. I applied aspects of UI and agile development in a recent project.
            </p>
          </div>
          <p className="m-4 p-4 col bold-text">
          Technical skills: React.js, javascript, node.js, CSS, material-UI, Adobe Creative Suite, handlebars.js, bootstrap
          </p>
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