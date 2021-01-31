
import './App.css';
import { Component } from 'react';
import Home from "./Home";
import Contact from "./Component/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            </Switch>
          </Router>
      </>
    );
  };
}

export default App;