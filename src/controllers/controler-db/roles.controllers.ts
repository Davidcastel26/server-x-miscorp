import { Request, Response, NextFunction } from 'express';
import prismadb from '../../models/prismadb';
import { Roles } from '../../ts/interfaces/users';

export const createRole = async (
    req:  Request,
    res:  Response, 
    next: NextFunction
) => {

    const { role_Name }:Roles = req.body

    try {
        
        const roleCreate: Roles = {
            role_Name,
        }

        await prismadb.role_miscord_X.create({
            data: {
                role_Name: roleCreate.role_Name
            }
        })

        return res.status(202).json({
            msg:'ROLE CREATED',
            roleCreate
        })

    } catch (error) {
        next(error)
    }

}

export const getByIdRole = async (
    req:  Request, 
    res:  Response, 
    next: NextFunction
) => {

    const { idRole } = req.params

    try {
    
        const getOneRole = await prismadb.role_miscord_X.findUnique({
            where:{ idRole},
            include:{ user: true }
        })

        return res.status(200).json(getOneRole)

    } catch (error) {
        next(error)
    }

}

export const updateRole = async (
    req:  Request, 
    res:  Response, 
    next: NextFunction
) => {
    
    const { idRole } = req.params
    const { role_Name }: Roles = req.body

    try {
        
        const updateInfo = {
            role_Name
        }

        await prismadb.role_miscord_X.update({
            where:{idRole},
            data:updateInfo
        })

        return res.status(202).json({
            msg:`updated ${updateInfo.role_Name}`
        })

    } catch (error) {
        next(error)
    }


}

export const deleteRole = async (
    req:  Request, 
    res:  Response, 
    next: NextFunction
) => {

    const { idRole } = req.params

    try {
        
        const roleRemove = await prismadb.role_miscord_X.delete(
            {where:{idRole}}
        )

        return res.status(204).json(roleRemove)

    } catch (error) {
        next(error)
    }

}

export const getAllRole = async (
    req:  Request, 
    res:  Response, 
    next: NextFunction
) => {

    try {
        
        const allRoles = await prismadb.role_miscord_X.findMany()

        return res.status(200).json(allRoles)

    } catch (error) {
        next(error)
    }

}
    