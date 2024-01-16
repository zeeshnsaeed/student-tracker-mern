import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdateStudent = () => {
  const [value, setValue] = useState({
    sid: "",
    sname: "",
    phone: "",
    email: "",
    grade: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;

    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Link to="/" className="btn btn-secondary mt-4 mb-4">
            Back to Home
          </Link>

          <div className="card">
            <div className="card-header">
              <h3 className="mb-0"> Update Student Information</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Student ID */}
                <div className="form-group">
                  <label htmlFor="studentID">ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentID"
                    placeholder="Student ID"
                    onChange={setData}
                    value={value.sid}
                    name="sid"
                  />
                </div>

                {/* Student Name */}
                <div className="form-group mt-2">
                  <label htmlFor="studentName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    placeholder="Student Name"
                    onChange={setData}
                    value={value.sname}
                    name="sname"
                  />
                </div>

                {/* Phone */}
                <div className="form-group mt-2">
                  <label htmlFor="studentPhone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentPhone"
                    placeholder="Student Phone"
                    onChange={setData}
                    value={value.phone}
                    name="phone"
                  />
                </div>

                {/* Email */}
                <div className="form-group mt-2">
                  <label htmlFor="studentEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="studentEmail"
                    placeholder="Student Email"
                    onChange={setData}
                    value={value.email}
                    name="email"
                  />
                </div>

                {/* Grade */}
                <div className="form-group mt-2">
                  <label htmlFor="studentGrade">Grade</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentGrade"
                    placeholder="Student Grade"
                    onChange={setData}
                    value={value.grade}
                    name="grade"
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
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

export default UpdateStudent;
