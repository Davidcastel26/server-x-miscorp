import { NextFunction, Request, Response } from "express";
import { Todos } from "../../ts/interfaces/itodos";
import prismadb from '../../models/prismadb';


export const createTodo = async (
    req:  Request,
    res:  Response, 
    next: NextFunction
) => {

    const {userId, todoName}:Todos = req.body

    try {
        const postToDo: Todos = {
            userId,
            todoName,
        }

        const user = await prismadb.user_miscord_X.findFirst({
            where: {
                idUser: userId
            }
        })

        if( user ){
            await prismadb.toDo_miscord_X.create({ 
                data:{
                    todoName: postToDo.todoName,
                    userId: user?.idUser
                } 
            })

            res.status(201).json({
                msg:'product posted succesfull :) ',
                postToDo
            })
        }

    } catch (error) {
        next(error)
    }

}

export const getAllTodo = async( 
    req:Request, 
    res:Response, 
    next:NextFunction 
) => {

    try {
    
        const allToDos = await prismadb.toDo_miscord_X.findMany({
            include:{
                user:true
            }
        })

        return res.status(200).json(allToDos)
        
    } catch (error) {
        next(error)
    }


}