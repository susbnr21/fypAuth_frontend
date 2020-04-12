import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Background from '../../assets/boxs.jpeg';
// import axios from 'axios';

import Navbar from "../layout/Navbar.js";


class Dashboard extends Component {
  // state = {
  //   users: [],
  // }
  // componentDidMount() {
  //   axios.get(`http://localhost:5000/usersinfo`)
  //     .then(res => {
  //       this.setState({users: res.data});
  //       console.log(res);
  //     }).catch(err => console.log('cannot access',err));
  // }
    
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
      <Navbar/>
      <div style={{backgroundImage: `url(${Background})`, height: '760px', width: '100%'}}>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row" style={{marginTop: "380px"}}>
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                {this.testfunction}
                <p className="flow-text black-text text-darken-1" style={{fontFamily: "Arial", fontWeight: 'bold'}}>
                  Welcome to Rental Shifters{" "}
                  <span style={{ fontFamily: "monospace"}}></span> 👏
                </p>
              </h4>
              <Link to = "/about"
                  style={{
                    width: "150px",
                    borderRadius: 35,
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    flex: 1,
                    flexDirection: "row"
                  }}
                  className="btn btn-large white-text waves-effect waves-light hoverable blue accent-3"
                >
                Next
              </Link>
            </div>
            <div style= {{marginTop: '420px'}}>
              <button
                  style={{
                    width: "100px",
                    letterSpacing: "1.5px",
                    borderRadius: 3
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-small waves-effect waves-light hoverable red accent-3"
                >
                  LogOut
              </button>
              </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
