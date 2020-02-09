import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Index from "./pages/index";
import Saved from "./pages/saved";

class App extends React.Component {

  state = {
    currentPage: window.location.pathname
  }


  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }

  render() {

    return (
      <Router>
        <div>
          <Navbar currentPage={this.state.currentPage} handlePageChange={this.handlePageChange} />
          <Route exact path="/" component={Index} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;