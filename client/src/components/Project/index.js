import React from "react";

function Project(props) {
    return(
        <div className="clearfix mb-4">
          <img src={props.src} className="float-left rounded mr-3" alt={props.key} />
          <h5 className="mt-0 mb-1">{props.title}</h5>
          <p>{props.description}</p>
          <a className="btn btn-light mr-3" href={props.viewlink} role="button" target="_blank" rel="noopener noreferrer">View</a>
          <a className="btn btn-light" href={props.githublink} role="button" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    );
}

export default Project;