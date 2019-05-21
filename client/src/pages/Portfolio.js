import React from "react";
import Project from "../components/Project";
import Projects from "../projects.json";

function Portfolio() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-dark text-white">
        <h1 id="fadetext">My Portfolio</h1>
        <p className="lead" id="fadetext">
          This is a collection of projects that display my web design and coding abilities.
        </p>
      </div>
      <div className="jumbotron bg-dark text-white">
        {Projects.map(project => (
          <Project 
            key={project.id}
            src={project.src}
            title={project.title}
            description={project.description}
            viewlink={project.viewlink}
            githublink={project.githublink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;