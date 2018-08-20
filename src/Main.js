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
  // https://ebird.org/ws2.0/ref/region/list/country/world?fmt=json&key=dd5duaiiro1"
  // api key: dd5duaiiro1
  //https://ebird.org/ws2.0/ref/region/list/country/world?fmt=json&key=dd5duaiiro1

  //https://ebird.org/ws2.0/ref/hotspot/info/{{locId}}' \

  getBirds(){
    // request('GET', 'https://ebird.org/ws1.1/ref/taxa/ebird?cat=species&fmt=json&locale=en_US').then(
    request('GET', 'https://ebird.org/ws2.0/ref/region/list/country/world?fmt=json&key=dd5duaiiro1').then(
      function(taxa){
        if(taxa.statusCode == 200) {
          return taxa;
        }
      }
    ).then(
      function(taxa){
        console.log(taxa.body);
      }
    )
  }

  componentWillMount(){
    console.log('will');
    this.getBirds()
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
            <li><NavLink to="/CountryList">Country</NavLink></li>
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