import mongoose from 'mongoose';

const EmpSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
});

const Employee = mongoose.model('Employee', EmpSchema);

export default Employee;