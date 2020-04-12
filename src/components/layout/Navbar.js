import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper" style={{backgroundColor: 'grey'}}>
            <a href="/" className="col s5 brand-logo center black-text" style={{fontFamily: 'Arial', fontWeight: 'bold'}}>RENTAL SHIFTERS</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 30}} href="/dashboard">Home</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 30}} href="/about">About</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 30}} href="/selection">Selection</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 30}} href="/location">Map</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
