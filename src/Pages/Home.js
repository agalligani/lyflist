import React, { Component } from "react";

class Home extends Component {
  render() {
    const options = [
      'one', 'two', 'three'
    ]
    return (
      <div>
        <h2>HELLO</h2>
        <p>{options}</p>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}

export default Home;