import { Router } from 'express';
import { addStudent, getStudentByID, getStudents } from './controller';

const router = Router();

router.get('/', getStudents);
router.get('/:id', getStudentByID);
router.post('/', addStudent);

export default router;
