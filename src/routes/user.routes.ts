import { Router } from 'express';
import * as userCtrl from '../controller/user.controller';
<<<<<<< HEAD

const router = Router();

router.post('/', userCtrl.create);
=======
import { authenticate } from '../middlewares/auth.middleware';
import { hasReaderRole } from '../middlewares/user.middleware';
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema, updateUserSchema } from '../validators/user.validator';

const router = Router();

router.get('/', userCtrl.getAll);
router.get('/email/:email', userCtrl.getOneByEmail);
router.post('/',authenticate, hasReaderRole, validate(createUserSchema), userCtrl.create);
router.put('/:username', userCtrl.update);

>>>>>>> 8774fe84a0c7f097bfa0ccc50c963b6957b6c2eb
export default router;