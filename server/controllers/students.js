import Student from "../models/Student.js";

// Create a new Student   C => CRUD
const createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

// Get all Students     R => CRUD
const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ students });
  } catch (error) {
    next(error);
  }
};

// Get a single Student   R => CRUD
const getStudent = async (req, res, next) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOne({ _id: studentID });

    if (!student) {
      throw new Error(`Student not found with id: ${studentID}`);
    }

    res.status(200).json({ student });
  } catch (error) {
    next(error);
  }
};

// Update Student Handler  U => CRUD
const updateStudent = async (req, res, next) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOneAndUpdate(
      { _id: studentID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      throw new Error(`Student not found with id: ${studentID}`);
    }

    res.status(200).json({ student });
  } catch (error) {
    next(error);
  }
};

// Delete Student Handler  D => CRUD
const deleteStudent = async (req, res, next) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOneAndDelete({ _id: studentID });

    if (!student) {
      throw new Error(`Student not found with id: ${studentID}`);
    }

    res.status(200).json({ student });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
