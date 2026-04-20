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

/**
 * @openapi
 * /users:
 *  get:
 *    summary: Returns all users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: Returns all users
 */
router.get('/', userCtrl.getAll);

/**
 * @openapi
 * /users/email/{email}:
 *  get:
 *    summary: Finds user by email
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: email
 *        required: true
 *        schema: 
 *          type: string
 *    responses:
 *      200: 
 *        description: Return user by email
 *      404:
 *        description: User not found by email 
 */
router.get('/email/:email', userCtrl.getOneByEmail);

/**
 * @openapi
 * /users:
 *  post:
 *    summary: Creates a user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              firstname:
 *                type: string
 *              lastname:
 *                type: string
 *              email:
 *                type: string
 *    responses:
 *      201:
 *        description: User created 
 * 
 */
router.post('/',authenticate, hasReaderRole, validate(createUserSchema), userCtrl.create);
router.put('/:username', userCtrl.update);

>>>>>>> 8774fe84a0c7f097bfa0ccc50c963b6957b6c2eb
export default router;