const request = require('express')
import { Response, NextFunction } from 'express';
import bcryptjs from 'bcryptjs';
import {  Users } from '../../ts/interfaces/iusers';
// CustomRequest
import prismadb from '../../models/prismadb';

const salt = bcryptjs.genSaltSync();

export const registerUser = async (
    req: typeof request,
    res: Response,
    next: NextFunction
) => {

    const { username, password, email, roleId }: Users = req.body;

    try {

        let newUser: Users = {
            username,
            email,
            password,
            roleId
        };

        newUser.password = bcryptjs.hashSync(password, salt);

        const userPosted = await prismadb.user_miscord_X.create({
            data:{
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                roleId: newUser.roleId
            }
        })

        req.session.user = {
            username: userPosted.username,
            userId:   userPosted.idUser,
        }

        res.status(201).json({
            loggedIn: true,
            newUser
        })
        
    } catch (error) {
        next(error)

        return res.status(500).json({
            msg:'Go with admin'
        })
    }

}

export const loginUser = async (
    req: typeof request,
    res: Response,
    next: NextFunction
) => {

    const { username, password } = req.body;

    try {
        
        const potentialLogin = await prismadb.user_miscord_X.findFirst({
            where:{ username }
        })

        if(!potentialLogin){
            return res.status(400).json(
                {msg:'Username / Pass are not correct'}
            )
        }

        const isValidPassword = await bcryptjs.compareSync(
            password,
            potentialLogin.password
        )

        if(!isValidPassword){
            return res.status(400).json(
                {msg:'Username / Pass are not correct'}
            )
        }

        req.session.user = {
            username: potentialLogin.username,
            userId:   potentialLogin.idUser,
        }

        return res.status(200).json({
            loggedIn: true,
            user: potentialLogin.username
        })

    } catch (error) {
        next(error)

        return res.status(500).json({
            msg:'Go with admin'
        })
    }

}

export const userLogged = async (
    req: typeof request,
    res: Response,
    next: NextFunction
) => {

    const loggedUser = req.session;

    try {

        if( loggedUser.user && loggedUser.user.username ){
            res.status(200).json({
                loggedIn: true,
                name: loggedUser.user.username
            })
        }else {
            res.json({ loggedIn: false })
        }
        
    } catch (error) {
        next(error)

        return res.status(500).json({
            msg:'Go with admin'
        })
    }

}