import React from "react";

function HomeSercices() {
  return (
    <>
      <div className="service-home">
        <div className="service-head">
          <h2>My Services</h2>
        </div>
        <div className="service-box">
          <div className="service-boxes">
            <h3>
              <i class="bi bi-code-slash"></i>Developer Skills
            </h3>
            <div className="text-service">
              A full knowledge of HTML / CSS and Javascript. I make responsive
              applications with Bootstrap and interactive UI's with React.
            </div>
          </div>

          <div className="service-boxes">
            <h3>
              <i class="bi bi-code"></i>UI Design
            </h3>
            <div className="text-service">
            A love for design and a good eye for creativity. I have proficiency in wireframing, color theory and visual communication.
            </div>
          </div>

          <div className="service-boxes">
            <h3>
              <i class="bi bi-code-slash"></i>2D Artist
            </h3>
            <div className="text-service">
              A full knowledge of HTML / CSS and Javascript. I make responsive
              applications with Bootstrap and interactive UI's with React.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSercices;
