import { Router } from "express";
import { check } from "express-validator";






const router = Router();

// router.get('/', getAllRole )

// router.get('/:idRole', [
//     check('idRole').custom( roleId ),
//     validateAreas
// ], getByIdRole )

// router.post('/', [
//     check('role_Name','Role Name is a must').not().isEmpty(),
//     check('role_Name','Must be more than 3 ccharacters').isLength({min:3}),
//     check('role_Name').custom(roleNameInDB),
//     validateAreas
// ],createRole)

// router.delete('/:idRole',[
//     check('idRole').custom( roleId ),
//     validateAreas
// ], deleteRole)


export default router;