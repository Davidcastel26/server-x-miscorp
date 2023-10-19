import { Router } from "express";
import { check } from "express-validator";
import { createTodo, getAllTodo } from "../controllers/controler-db/todo.constrollers";
import { validateAreas } from "../middleware/validate";


const router = Router();

router.post('/',[
        check('todoName','To do Name is a must').not().isEmpty(),
        check('userId','User Id is a must').not().isEmpty(),
        check('todoName','Must be more than 3 ccharacters').isLength({min:3}),
        validateAreas
    ], createTodo )

router.get('/', getAllTodo )


export default router;