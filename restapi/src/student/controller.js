const pool = require('../../database')
const queries = require('../student/queries')



// display students
const getStudents = ( req, res ) => {
    pool.query(queries.getStudents, (error, results)=>{
        if(error) throw error;

        res.status(200).json(results.rows)
    })
}

// display student
const getStudentByID = ( req,res ) => {
    const id = Number(req.params.id);
    pool.query(queries.getStudentByID,[id], (error, results)=> {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

// add students
const addStudent = ( req, res )=> {
    const { name, email, age, dob } = req.body;

    // check if email exist
    pool.query(queries.checkEmailExists, [email], (error, results)=> {
        if(results.rows.length) {
            res.send(`${email} already exists`)
            return
        }
        // perform delete action
        pool.query(queries.addStudent, [name, email, age, dob], (error,results)=> {
            if(error) throw error;
            res.status(201).json('Student created successfully')

        })

    })
}

// delete students 
const removeStudent = ( req, res ) => {
    const id = Number(req.params.id);
    pool.query(queries.getStudentByID, [id], (error, results) => {
        if(!results.rows.length) {
            res.send('student does not exist');
        }
        pool.query(queries.removeStudent, [id], (error, results) => {
            if(error) throw error;
            res.status(200).json("student removed successfully")
        })
    })


}

const updateStudent = ( req, res ) => {
    const id = Number(req.params.id);
    const { name } = req.body;

    pool.query(queries.getStudentByID, [id], ( error, results) => {
        if(!results.rows.length){
            res.send(`${name} not found in database`);
        }
        pool.query(queries.updateStudent, [name, id], ( error, results )=> {
            if(error) throw error;
            res.status(200).send('Student updated Successfully')
        })
    })

}



module.exports = {
    getStudents,
    getStudentByID,
    addStudent,
    removeStudent,
    updateStudent
}