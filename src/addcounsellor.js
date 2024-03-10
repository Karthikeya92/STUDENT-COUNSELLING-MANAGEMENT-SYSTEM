import React from "react";
import './addcounsellor.css';
import { callApi} from "./main";

class AddStudent extends React.Component {

    constructor() {
        super();
        this.state = {
            counselorId: "",
            firstName: "",
            lastName: "",
            gender: "",
            cklMailId: "",
            contactNumber: "",
            department: "",
            designation: "",
            cpass: ""
        };
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify(this.state);
        const url = "http://localhost:5000/registration/addcounsellor";

        callApi("POST", url, data, this.handleSuccess, this.handleError);
    }

    

    handleError(errorMessage) {
        console.error("Error:", errorMessage);
        // Handle error, for example, show an error message to the user
    }
    handleSuccess(response) {
        console.log("Success:", response);
        
    }

    render() {
        return (
            <div className='full-height add-counsellor-container'>
            <div className="accontent">
                <h2>Add Counsellor</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="counselorId"  value={this.state.counselorId} onChange={this.handleChange} placeholder="Existing Faculty ID" className="ac-height" required />
                    <br />
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" className="ac-height" required/>
                    <br />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" className="ac-height"required />
                    <br />
                    <select name="gender" value={this.state.gender} onChange={this.handleChange} className="ac-height" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                    <input type="email" name="cklMailId" value={this.state.email} onChange={this.handleChange} placeholder="KLU Email" className="ac-height" required/>
                    <br />
                    <input type="tel" name="contactNumber" value={this.state.contactnumber} onChange={this.handleChange} placeholder="Contact Number" className="ac-height"required />
                    <br />
                    <select name="department" value={this.state.branch} onChange={this.handleChange} className="ac-height" required>
                             <option value="">Select Branch</option>
                                <option value="CSE(H)">CSE(H)</option>
                                <option value="CSE(R)">CSE(R)</option>
                                <option value="CS&IT">CS&IT</option>
                                <option value="EEE">EEE</option>
                                <option value="ECE">ECE</option>
                                <option value="CE">CE</option>
                                <option value="ME">ME</option>
                             
                    </select>
                    <select name="designation" value={this.state.branch} onChange={this.handleChange} className="ac-height" required>
                             <option value="">Select Designation</option>
                                <option value="Assistant Proffesor">Assistant Proffesor</option>
                                <option value="Associate Proffesor">Associate Proffesor</option>
                                <option value="Proffesor">Proffesor</option>

                             
                    </select>
                   
                    <input type="password" name="cpass" value={this.state.pass || "KLU@123"} onChange={this.handleChange} placeholder="Password" className="ac-height" />
                    <br />
                    <button type="submit" className="ac-height">Submit</button>
                </form>
            </div>
            </div>
        );
    }
    
    
}

export default AddStudent;
