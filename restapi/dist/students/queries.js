"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queries = {
    getStudents: 'SELECT * FROM students',
    getStudentByID: 'SELECT * FROM students WHERE id=$1',
    checkEmailExists: 'SELECT s FROM students s WHERE s.email = $1',
    addStudent: 'INSERT INTO students (name, email, age, dob) VALUES($1, $2, $3, $4)',
};
exports.default = queries;
