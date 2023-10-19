import { Router } from "express";
import { check } from "express-validator";
import { getAllUser, updateUserDB } from "../controllers/controler-db/users.controllers";
import { validateAreas } from "../middleware/validate";






const router = Router();

router.get('/', getAllUser )


router.put('/:idUser', [
    check('username','Name is a must').not().isEmpty(),
    check('username','Must be more than 3 ccharacters').isLength({min:3}),
    check('email','email is a must').not().isEmpty(),
    validateAreas
],updateUserDB)



export default router;