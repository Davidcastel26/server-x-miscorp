import prismadb from "../models/prismadb"


export const roleId = async (idRole: string) => {

    const idRoleExist = await prismadb.role_miscord_X.findUnique({where : {idRole}})

    if( !idRoleExist ) throw new Error(`role ${idRole} does not exist`)

}

export const roleNameInDB = async (role_Name:string) => {
    
    const nameRole = await prismadb.role_miscord_X.findUnique({
        where:{ role_Name }
    })

    if( nameRole ) throw new Error(`role ${nameRole.role_Name} in existing status in DB`)

}