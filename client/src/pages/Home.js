import React from "react";

function Home() {
  return (
  <div className="container mt-5">
    <div className="jumbotron text-center bg-dark text-white">
      <h1 id="fadetext">Welcome to Desiree's Designs</h1>
      <p className="lead" id="fadetext">
      Specializing in creative website designs and application development.
      </p>
    </div>
    <div className="jumbotron bg-dark text-white">
      <h2 className="mb-3" id="gtext">About Me</h2>
      <div className="clearfix">
        <img src="./assets/images/Me.jpg" alt="Me" className="img-thumbnail float-left mr-3" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum rutrum efficitur. In ullamcorper velit ac neque fringilla, id fringilla arcu posuere. Morbi non orci vehicula, sodales magna sed, consequat urna. Quisque nec dolor viverra, fringilla nibh non, rhoncus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus justo tellus, feugiat id sem eget, fermentum cursus magna. Nulla luctus turpis ac fringilla mattis. Proin vel consectetur urna. Praesent in velit eget nibh feugiat pharetra.
          Mauris in lorem orci. Nunc vel nibh vitae elit vestibulum lacinia a sit amet nulla. Maecenas mauris libero, gravida eu sem quis, auctor elementum enim. Donec ultricies dui eget viverra volutpat. Ut aliquet ex non orci maximus, id tempor erat consectetur. Vivamus dolor ligula, malesuada sed varius et, rutrum sit amet massa. Nunc dictum libero ac mi molestie gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tincidunt velit lorem, quis vulputate metus finibus vel. Pellentesque ac mauris quis dolor tincidunt dignissim nec nec tortor. Proin neque sem, lacinia molestie velit et, cursus consectetur turpis. Nulla ornare semper ornare.
        </p>
      </div>
    </div>
  </div>
  );
}

export default Home;