import React from "react";
import { Link } from "react-router-dom";

const StudentList = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add-btn-container mt-2 text-center">
          <Link to="/StudentForm">
            <button className="btn btn-primary">Add Student</button>
          </Link>
        </div>

        <table className="table table-hover mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Grades</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Zeeshan</td>
              <td>12345678</td>
              <td>zeeshan@example.com</td>
              <td>B</td>
              <td className="d-flex justify-content-around">
                <button className="btn btn-success" title="View">
                  <i className="fas fa-eye"></i>
                </button>
                <button className="btn btn-primary" title="Edit">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-danger" title="Delete">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>John</td>
              <td>12345678</td>
              <td>john@example.com</td>
              <td>B+</td>
              <td className="d-flex justify-content-around">
                <button className="btn btn-success" title="View">
                  <i className="fas fa-eye"></i>
                </button>
                <button className="btn btn-primary" title="Edit">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-danger" title="Delete">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
