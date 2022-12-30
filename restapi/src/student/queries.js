const  getStudents = "SELECT * FROM students";

const getStudentByID = "SELECT * FROM students WHERE id=$1"

module.exports = {
    getStudents,
    getStudentByID,
}