import React from "react";

function Home() {
  return (
  <div className="container mt-5">
    <div className="jumbotron text-center bg-dark text-white">
      <h1 className="display-4" id="fadetext">Welcome to Desiree's Designs</h1>
      <p className="lead" id="fadetext">
      Specializing in creative website designs and application development.
      </p>
    </div>
    <div className="jumbotron bg-dark text-white">
      <img src="./assets/images/HomeDivider.svg" className="img-fluid mb-4" alt="Divider" />
      <div className="clearfix">
        <div className="card float-left mr-4 mt-1">
          <img className="card-img-top" src="./assets/images/Me.jpg" alt="Me" />
          <div className="card-body">
            <p className="card-text text-dark" id="gtext">Desiree Noelle Howell</p>
          </div>
        </div>
        <p className="lead" id="about"> 
          Creating websites and applications is more than just a career path to me; it's my hobby and my passion.
          Making complex web apps is exciting because it allows me to think outside of the box. 
          I love the thrill of coming up with solutions that others may not have thought of in the past.
          Sometimes problem solving within the coding world can be difficult, but I'm always up for a challenge and an opportunity to expand my knowledge!
          In fact, technology grows and changes so fast in this industry that I think you HAVE to be willing to learn!
          You will find that I'm determined to overcome any and all challenges that come along with being a successful programmer.
        </p>
      </div>
    </div>
  </div>
  );
}

export default Home;