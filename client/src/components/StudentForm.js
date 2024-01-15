import React from "react";
import { Link } from "react-router-dom";

const StudentForm = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Link to="/" className="btn btn-secondary mt-4 mb-4">
            Back to Home
          </Link>

          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Student Information Form</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Student ID */}
                <div className="form-group">
                  <label htmlFor="studentID">Student ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentID"
                    placeholder="Enter Student ID"
                  />
                </div>

                {/* Student Name */}
                <div className="form-group">
                  <label htmlFor="studentName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    placeholder="Enter Student Name"
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="studentPhone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentPhone"
                    placeholder="Student Phone"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="studentEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="studentEmail"
                    placeholder="Student Email"
                  />
                </div>

                {/* Grade */}
                <div className="form-group">
                  <label htmlFor="studentGrade">Grade</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentGrade"
                    placeholder="Student Grade"
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
