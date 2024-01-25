import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: [true, "Student ID is required!"],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true,
    maxLength: [50, "Name can't be more than 50 characters"],
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  grades: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Student", StudentSchema);
