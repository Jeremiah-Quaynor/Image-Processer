import { Router} from 'express'
import controller, { getStudents } from './controller';

const router = Router();

router.get('/', getStudents );
router.get('/:id', controller.getStudentByID);
router.post('/', controller.addStudent);

export default router;
