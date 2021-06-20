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
      <div className="col-12">
        <p className="m-4 p-4 text-center bold-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur vitae nunc sed velit dignissim sodales ut. Aliquet eget sit amet tellus cras adipiscing enim eu. Integer eget aliquet nibh praesent. Id nibh tortor id aliquet lectus. Praesent semper feugiat nibh sed pulvinar proin gravida. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit. Urna duis convallis convallis tellus id. Laoreet sit amet cursus sit amet. Euismod nisi porta lorem mollis aliquam ut. Sed blandit libero volutpat sed cras ornare arcu. Aliquet enim tortor at auctor urna nunc id cursus metus. Donec adipiscing tristique risus nec feugiat in fermentum. Augue lacus viverra vitae congue eu consequat ac. Scelerisque fermentum dui faucibus in ornare. Porttitor lacus luctus accumsan tortor posuere ac ut. 
        </p>
      </div>
        <div className="col-5">
            <img src={ profile } className="img-fluid rounded m-4 p-4" style={{ width: "15%" }} alt="cover" />
        </div>
        <div class="col-6">
          <div class="row">
            <p className="m-4 p-4 col-12 intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae.
            </p>
          </div>
          <p className="m-4 p-4 col intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div> 
    </section>
  )
};

export default About;