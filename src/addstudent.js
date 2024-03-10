import React from "react";
import './addstudent.css';
import { callApi} from "./main";

class AddStudent extends React.Component {

    constructor() {
        super();
        this.state = {
            regNo: "",
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            bloodGroup: "",
            contactNo: "",
            parentContactNo: "",
            email: "",
            year: "",
            semester: "",
            branch: "",
            cgpa: "",
            pass: ""
        };
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify(this.state);
        const url = "http://localhost:5000/registration/signup";

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
            <div className='full-height add-student-container'>
            <div className="mpcontent">
                <h2>Add Student</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="regNo"  value={this.state.regNo} onChange={this.handleChange} placeholder="Registration Number" className="mp-height" required />
                    <br />
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" className="mp-height" required/>
                    <br />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" className="mp-height"required />
                    <br />
                    <select name="gender" value={this.state.gender} onChange={this.handleChange} className="mp-height" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                    <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} placeholder="Date of Birth" className="mp-height" required/>
                    <br />
                    <input type="text" name="bloodGroup" value={this.state.bloodGroup} onChange={this.handleChange} placeholder="Blood Group" className="mp-height" required/>
                    <br />
                    <input type="tel" name="contactNo" value={this.state.contactNo} onChange={this.handleChange} placeholder="Contact Number" className="mp-height"required />
                    <br />
                    <input type="tel" name="parentContactNo" value={this.state.parentContactNo} onChange={this.handleChange} placeholder="Parent's Contact Number" className="mp-height" required/>
                    <br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" className="mp-height" required/>
                    <br />
                    <input type="number" name="year" value={this.state.year} onChange={this.handleChange} placeholder="Year" className="mp-height" required/>
                    <br />
                    <select name="semester" value={this.state.semester} onChange={this.handleChange} className="mp-height" required> 
                        <option value="">Select Semester</option>
                        <option value="even">Even</option>
                        <option value="odd">Odd</option>
                    </select>
                    <br />
                    <select name="branch" value={this.state.branch} onChange={this.handleChange} className="mp-height" required>
                             <option value="">Select Branch</option>
                                <option value="CSE(H)">CSE(H)</option>
                                <option value="CSE(R)">CSE(R)</option>
                                <option value="CS&IT">CS&IT</option>
                                <option value="EEE">EEE</option>
                                <option value="ECE">ECE</option>
                                <option value="CE">CE</option>
                                <option value="ME">ME</option>
                             
                        </select>
                    <br />
                    <input type="number" name="cgpa" value={this.state.cgpa} onChange={this.handleChange} placeholder="CGPA" className="mp-height" required />
                    <br />
                    <input type="password" name="pass" value={this.state.pass || "KLU@123"} onChange={this.handleChange} placeholder="Password" className="mp-height" />
                    <br />
                    <button type="submit" className="mp-height">Submit</button>
                </form>
            </div>
            </div>
        );
    }
    
    
}

export default AddStudent;
