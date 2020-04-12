import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from '../../assets/boxs.jpeg';
import logo from '../../assets/Logo.png';

import StruckModal from '../modal/StruckModal';
import MtruckModal from '../modal/MtruckModal';
import LtruckModal from '../modal/LtruckModal';
import BtruckModal from '../modal/BtruckModal';

import WorkerDp from '../dropdown/workerDp';
import BoxesDp from '../dropdown/boxesDp';
import ExtraDp from '../dropdown/extraDp';

import Navbar from "../layout/Navbar.js";


class Selection extends Component {
    
    render() {
        return(
            <div>
            <Navbar/>
            <div style={{backgroundImage: `url(${Background})`, height: '760px', width: '100%', overflow: 'scroll'}}>
                <div className="row">
                    <div className="landing-copy col s12 center-align" style={{marginTop: "40px"}}>
                    <logo className='logo' style={{display: 'block'}}>
                        <img src={logo} alt="Logo" height='120' width='120'/>
                    </logo>

                        <div style={{margin: 100}}></div>

                        {/* FOR VEHICLE SELECTION */}
                        <div>
                            <h4>
                                <p className="flow-text black-text text-darken-1" 
                                    style={{fontFamily: "Arial", fontSize: 35, fontWeight: 'bold', textDecoration: 'underline'}}>
                                    Select Your Preferred Truck Size {" "}
                                    <span style={{ fontFamily: "monospace" }}></span> 🚛
                                </p>
                            </h4>
                            
                            <div>
                                <StruckModal className="hoverable"/>

                                <MtruckModal className="hoverable"/>
                            </div>

                            <div>
                                <LtruckModal className="hoverable"/>

                                <BtruckModal className="hoverable"/>
                            </div>

                        </div>

                        <div style={{margin: 100}}></div>

                        <h5 style={{fontFamily: 'Arial', fontSize: 35, fontWeight: 'bold', textDecoration: 'underline', marginBottom: 20}}>Select The Choices</h5>

                                {/* FOR WORKER SELECTION */}
                                <div>
                                    <WorkerDp/>
                                </div>

                                {/* FOR BOXES SELECTION */}
                                <div>
                                    <BoxesDp/> 
                                </div>

                                {/* FOR EXTRA SELECTION */}
                                <div>
                                    <ExtraDp/>
                                </div>

                        <div>
                            <text style={{color: 'red', fontWeight: 'bold', fontFamily: 'Arial'}}>
                                (Please pin point your location you are shifting to in the map section.)
                            </text>

                            <div style={{margin: 10}}></div>

                            <Link to = "/location"
                                style={{
                                    width: "150px",
                                    borderRadius: 35,
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    flex: 1,
                                    flexDirection: "row"
                                }}
                                type="submit"
                                className="btn btn-large white-text waves-effect waves-light hoverable blue accent-3"
                                >
                                Next
                            </Link>

                            <div style={{margin: 50}}></div>

                        </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Selection;