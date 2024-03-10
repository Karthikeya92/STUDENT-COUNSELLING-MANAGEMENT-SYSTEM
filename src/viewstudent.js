import React from "react";
import { callApi } from "./main";
import "./viewstudent.css"; // Import CSS file for styling

class ViewStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            searchQuery: ""
        };
    }

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents() {
        const url = "http://localhost:5000/viewstudent/details";
        callApi("GET", url, null, this.handleSuccess, this.handleError);
    }

    handleSuccess = (response) => {
        const data = JSON.parse(response);
        this.setState({ students: data });
    };

    handleError = (error) => {
        console.error("Error fetching student details:", error);
    };

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        const { students, searchQuery } = this.state;
        const filteredStudents = students.filter(student =>
            student.regNo.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div className='full-height'>
                <div className="vscontent">
                    <h2>View Students</h2>
                    <input
                        type="text"
                        placeholder="Search by Registration Number"
                        value={searchQuery}
                        onChange={this.handleSearchChange}
                        className="search-input"
                    />
                    <table className="student-table">
                        <thead>
                            <tr>
                                <th>Registration Number</th>
                                <th>Full Name</th>
                                <th>Gender</th>
                                <th>Date Of Birth(YY-MM-DD)</th>
                                <th>Blood Group</th>
                                <th>Contact No.</th>
                                <th>Parent Contact No.</th>
                                <th>Email</th>
                                <th>Current Year</th>
                                <th>Current Semester</th>
                                <th>Branch</th>
                                <th>Cgpa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.regNo}</td>
                                    <td>{student.firstName} {student.lastName}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.bloodGroup}</td>
                                    <td>{student.contactNo}</td>
                                    <td>{student.parentContactNo}</td>
                                    <td>{student.email}</td>
                                    <td>{student.year}</td>
                                    <td>{student.semester}</td>
                                    <td>{student.branch}</td>
                                    <td>{student.cgpa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ViewStudent;
