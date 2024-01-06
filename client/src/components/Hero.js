import React from "react";

const Hero = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <button className="btn btn-primary">Add student</button>
        </div>

        <table class="table mt-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Age</th>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th scope="col">Grades</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Zeeshan</td>
              <td>24</td>
              <td>12345678</td>
              <td>zeeshan@example.com</td>
              <td>B</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>John</td>
              <td>28</td>
              <td>12345678</td>
              <td>john@example.com</td>
              <td>B+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
