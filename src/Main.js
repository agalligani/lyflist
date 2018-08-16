import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import request from "superagent";

import Home from "./Pages/Home";
import Stuff from "./Pages/Stuff";
import Contact from "./Pages/Contact";
import "./style/index.css";

class Main extends Component {

  getBirds(){
    request('GET', 'https://jsonplaceholder.typicode.com/todos').end(
      function(err, res){
        if(res.ok) {
          console.log(res.body);
        } else {
          console.log(err);
        }
      }.bind(this)
    )
  }

  componentWillMount(){
    console.log('will');
    this.getBirds();
  }

  componentDidMount(){
    console.log('did');
    this.getBirds();
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Lyflist</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;