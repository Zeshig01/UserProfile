const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    position: { 
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
