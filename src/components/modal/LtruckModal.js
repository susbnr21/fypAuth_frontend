import React, { Component } from 'react';
import M from 'materialize-css'; 
import Ltruck from '../../assets/Ltruck.png';
import axios from 'axios';


class LtruckModal extends Component{
    state= {
        contact: " ",
        address_from: " ",
        address_to: " ",
        truck_size: "Large truck",
        description: "3-4 Bedrooms (1200-2400 sqft)",
        weight: "5500-6500 lbs",
        truck_space: "900-1400 cubic feet",
        capacity_furniture:"1-15 medium furniture",
        capacity_box: "upto 450 medium box"
    };

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      };
    

    handleSubmit = e => {
        e.preventDefault();

    axios.post(`http://localhost:5000/vehicles`,
    {
      contact: `${this.state.contact}`,
      address_from: `${this.state.address_from}`,
      address_to: `${this.state.address_to}`,
      truck_size: `${this.state.truck_size}`,
      description: `${this.state.description}`,
      weight: `${this.state.weight}`,
      truck_space: `${this.state.truck_space}`,
      capacity_furniture: `${this.state.capacity_furniture}`,
      capacity_box: `${this.state.capacity_box}`
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      
    })
      .then( res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(`This is the ${err} error.`)
      })
    };


    render() {
        return(
            <div style={{display: 'inline'}}>
                {/* For Large Truck */}
                <button className="btn modal-trigger" href="#modal3" style={{height:'160px', width: '430px', marginTop:'40px'}}>
                    <img src={Ltruck} style={{height:'160px', width: '500px'}} className='hoverable'></img>
                </button>
                <form id="modal3" className="modal" onSubmit={this.handleSubmit}>
                <div className="modal-content" style={{height: 400}}>
                <h5 style={{textDecoration: 'underline', fontWeight: 'bold'}}>You Have Selected Large Truck</h5>
                <div className="row">
                    <div style={{padding: 20}}>
                        <text style={{fontWeight: 'bold', color: 'orange'}}>DESCRIPTION</text>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="Large Truck" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Truck Size</label>
                    </div>
                        <div className="input-field col s6">
                        <input disabled value="3-4 Bedrooms (1200-2400 sqft)"
                        id="disabled" type="text" className="validate"/>
                        <label for="disabled">Description</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="5500-6500 lbs" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Weight</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="900-1400 cubic feet" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Truck Space</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="Moving 1-15 Furniture Items" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Capacity Furniture</label>
                    </div>
                    <div className="input-field col s6 ">
                        <input disabled value="Upto 450 medium box" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Capacity Boxes</label>
                    </div>
                </div>

                <div>
                    <text style={{fontWeight: 'bold', color: 'orange'}}>PLEASE FILL THE FORM BELOW</text>
                    <div className="input-field col s12">
                        <input id="phone_number" type="text" className="validate" name="contact" onChange={this.handleChange}/>
                        <label for="phone_number">Phone Number</label>
                    </div>
                    </div>
                    <div className="input-field col s6">
                        <input id="address_from" type="text" className="validate" name="address_from" onChange={this.handleChange}/>
                        <label for="adress_from">Address From</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="address_to" type="text" className="validate" name="address_to" onChange={this.handleChange}/>
                        <label for="address_to">Address To</label>
                    </div>
                </div>
                <div className="modal-footer">
                <button className="modal-close waves-effect waves-green btn-flat" type='submit' style={{marginRight: 20}}>Submit</button>
                <a href="#!" className="modal-close waves-effect waves-red btn-flat">Cancel</a>
                </div>
                </form>
            </div>
        )
    }
}

export default LtruckModal;