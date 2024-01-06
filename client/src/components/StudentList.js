import React from "react";
import { Link } from "react-router-dom";

const StudentList = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <Link to="/StudentForm">
            <button className="btn btn-primary">Add student</button>
          </Link>
        </div>

        <table className="table mt-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Grades</th>
              <th scope="col"></th>
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
                <button className="btn btn-success">
                  <i className="fa-regular fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
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
                <button className="btn btn-success">
                  <i className="fa-regular fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
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
