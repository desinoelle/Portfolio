import React from "react";

function Music() {
  return (
    <div className="container mt-5">
        <div className="jumbotron text-center bg-dark text-white">
          <h1 id="fadetext">My Music</h1>
          <p className="lead" id="fadetext">
            Click <a href="https://www.youtube.com/user/dezzieezzie/videos" target="_blank" rel="noopener noreferrer">Here</a> to check out my YouTube channel!
          </p>
        </div>
        <div className="jumbotron bg-dark text-white">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MLx5n1vDeLI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
    </div>
  );
}

export default Music;