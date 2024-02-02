// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { css } from "@emotion/react";
// import { BarLoader } from "react-spinners";
// import Modal from "react-modal"; // Import react-modal

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// const initialFormData = {
//   studentID: "",
//   name: "",
//   phone: "",
//   email: "",
//   grade: "",
// };

// const StudentForm = () => {
//   const [formData, setFormData] = useState(initialFormData);
//   const [loading, setLoading] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false); // State to control modal visibility

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const openModal = () => setModalIsOpen(true);
//   const closeModal = () => setModalIsOpen(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simulate a 1-second loading delay before submitting
//     setLoading(true);
//     setTimeout(async () => {
//       try {
//         const res = await fetch("http://localhost:8000/api/v1/students", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (res.ok) {
//           // Reset form after successful submission
//           setFormData(initialFormData);
//         } else {
//           const data = await res.json();
//           if (res.status === 400) {
//             console.error("Bad Request:", data);
//             openModal(); // Open the modal on duplicate data
//           } else {
//             console.error("Error submitting form:", data.message);
//           }
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       } finally {
//         setLoading(false);
//       }
//     }, 1000);
//   };

//   return (
//     <div className="container">

//       {/* Modal for Duplicate Data */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Duplicate Data Modal"
//         style={{
//           overlay: {
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           },
//           content: {
//             width: "400px",
//             height: "210px",
//             margin: "auto",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           },
//         }}
//       >
//         <h2 style={{ marginBottom: "15px" }}>Duplicate Data Error</h2>
//         <p style={{ marginBottom: "20px" }}>
//           Student with the same ID or email already exists. Please check your
//           input.
//         </p>
//         <button
//           onClick={closeModal}
//           style={{
//             backgroundColor: "#007BFF",
//             color: "#ffffff",
//             padding: "8px 15px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Close
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default StudentForm;

// new
// StudentForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";
import DuplicateDataModal from "./DuplicateDataModal"; // Import the new component

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const initialFormData = {
  studentID: "",
  name: "",
  phone: "",
  email: "",
  grade: "",
};

const StudentForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setFormData(initialFormData);
        } else {
          const data = await res.json();
          if (res.status === 400) {
            console.error("Bad Request:", data);
            openModal();
          } else {
            console.error("Error submitting form:", data.message);
          }
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="container">
      {/* ... Your existing code ... */}
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
              <form onSubmit={handleSubmit}>
                {/* ... Your existing form inputs ... */}

                {/* Student ID */}
                <div className="form-group">
                  <label htmlFor="studentID">ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentID"
                    placeholder="Student ID"
                    onChange={handleChange}
                    value={formData.studentID}
                    name="studentID"
                  />
                </div>

                {/* Student Name */}
                <div className="form-group mt-2">
                  <label htmlFor="studentName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    placeholder="Student name"
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                  />
                </div>

                {/* Phone */}
                <div className="form-group mt-2">
                  <label htmlFor="studentPhone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentPhone"
                    placeholder="Student phone"
                    onChange={handleChange}
                    value={formData.phone}
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
                    placeholder="Student email"
                    onChange={handleChange}
                    value={formData.email}
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
                    placeholder="Student grade"
                    onChange={handleChange}
                    value={formData.grade}
                    name="grade"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  disabled={loading}
                >
                  {loading ? (
                    <BarLoader
                      color={"#ffffff"}
                      loading={loading}
                      css={override}
                      size={150}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Duplicate Data */}
      <DuplicateDataModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default StudentForm;
