const {Router} = require('express');
const controller = require('../student/controller')
const router = Router();

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentByID);



module.exports = router;