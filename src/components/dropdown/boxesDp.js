import React, {Component} from 'react';

// Import Materialize
import M from "materialize-css";


class BoxesDp extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return(
        <div style={{display: 'inline'}}>
          <div className="input-field col s12" style={{backgroundColor: '#EBDDDB', width: 450, height: 180, marginLeft: 20}}>
            <text className="flow-text black-text text-darken-1" 
                style={{fontFamily: "Arial", fontSize: 25, fontWeight: 'bold'}}>
                Select the Number of Boxes {" "}
                <span style={{ fontFamily: "monospace" }}></span> 📦
                <p style={{color: 'red', fontFamily: 'Arial', fontSize: 15}}>
                    (Note: It is not mandatory to select the boxes)
                </p>
            </text>
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">None</option>
              <option value="2">1 Box</option>
              <option value="3">2 Boxes</option>
              <option value="4">3 Boxes</option>
              <option value="5">4 Boxes</option>
              <option value="6">5 Boxes</option>
              <option value="7">6 Boxes</option>
              <option value="8">7 Boxes</option>
              <option value="9">8 Boxes</option>
              <option value="10">9 Boxes</option>
              <option value="11">10 Boxes</option>
              <option value="11">More Than 10 Boxes</option>
            </select>
            {/* <label>Materialize Select</label> */}
          </div>
        </div>
        )
    }
}

export default BoxesDp;