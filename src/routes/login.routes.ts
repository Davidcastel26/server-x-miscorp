import { Router } from "express";
import { check } from "express-validator";

import { loginUser, registerUser, userLogged } from "../controllers/auth/userAuth.controller";
import { validateAreas } from "../middleware/validate";
import { isUsernameValid, usernameValidate } from "../helpers/userValidations";

const router = Router();

router
    .route('/login')
    .get( userLogged )
    .post([
        check('username','User Name is a must').not().isEmpty(),
        check('username').custom(isUsernameValid),
        check('password','Password is a must').not().isEmpty(),
        validateAreas
    ], loginUser )

router.post('/signup', [
    check('username').custom(usernameValidate),
    check('username').isLength({min:4}).withMessage('user name must be more than 3 characters'),
    check('email').notEmpty().withMessage('Email is a must'),
    check('email','invalid email').isEmail(),
    check('password','password is a must').not().isEmpty(),
    validateAreas
], registerUser )


export default router;