import React, {Component} from 'react';

// Import Materialize
import M from "materialize-css";


class WorkerDp extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return(
        <div style={{display:'inline'}}>
          <div className="input-field col s12" style={{backgroundColor: '#EBDDDB', width: 450, height: 180, marginLeft: 15}}>
            <text className="flow-text black-text text-darken-1" 
              style={{fontFamily: "Arial", fontSize: 25, fontWeight: 'bold'}}>
              Select the Number of workers {" "}
              <span style={{ fontFamily: "monospace" }}></span> 👨🏻‍🔧
              <p style={{color: 'red', fontFamily: 'Arial', fontSize: 15}}>
                  (Note: It is not mandatory to select the workers)
              </p>
            </text>
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">None</option>
              <option value="2">1 Worker</option>
              <option value="3">2 Workers</option>
              <option value="4">3 Workers</option>
              <option value="5">4 Workers</option>
              <option value="6">5 Workers</option>
              <option value="7">6 Workers</option>
              <option value="8">7 Workers</option>
              <option value="9">8 Workers</option>
              <option value="10">9 Workers</option>
              <option value="11">10 Workers</option>
            </select>
            {/* <label>Materialize Select</label> */}
          </div>
        </div>
        )
    }
}

export default WorkerDp;