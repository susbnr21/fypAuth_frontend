import React, {Component} from 'react';

// Import Materialize
import M from "materialize-css";


class ExtraDp extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return(
        <div>
          <div className="input-field col s12" style={{backgroundColor: '#EBDDDB', width: 450, marginLeft: 20, marginBottom: 100}}>
            <text className="flow-text black-text text-darken-1" 
                style={{fontFamily: "Arial", fontSize: 25, fontWeight: 'bold'}}>
                Select Any Extra Preferences You Want {" "}
                <span style={{ fontFamily: "monospace" }}></span> 🏡
                <p style={{color: 'red', fontFamily: 'Arial', fontSize: 15}}>
                    (Note: The Extra Preferences Also take extra charges)
                </p>
            </text>
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">None</option>
              <option value="2">House Rearrangement</option>
              <option value="3">Room Decoration</option>
            </select>
            {/* <label>Materialize Select</label> */}
          </div>
        </div>
        )
    }
}

export default ExtraDp;