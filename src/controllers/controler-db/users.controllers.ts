import { NextFunction, Request, Response } from "express"
import prismadb from "../../models/prismadb"
import { Users } from "../../ts/interfaces/iusers"

export const getAllUser = async( 
    req:Request, 
    res:Response, 
    next:NextFunction 
) => {

    try {
    
        const allUsers = await prismadb.user_miscord_X.findMany({
            include:{
                todo: true
            }
        })

        return res.status(200).json(allUsers)
        
    } catch (error) {
        next(error)
    }


}


export const updateUserDB = async (
    req: Request,
    res: Response,
    next:NextFunction
) => {


    const { idUser } = req.params;
    const { username, email, ...rest }:Users = req.body
    try {

        const userUpdate = {
            username,
            email,
            ...rest
        }

        await prismadb.user_miscord_X.update({
            where:{
                idUser
            },
            data:{
                username: userUpdate.username,
                email: userUpdate.email,
            }
        })
        
        return res.status(202).json(userUpdate)

    } catch (error) {
        next(error)
    }
}