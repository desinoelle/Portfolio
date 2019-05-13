import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
    );
  }
}

export default App;