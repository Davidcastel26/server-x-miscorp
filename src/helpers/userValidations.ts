import prismadb from "../models/prismadb"


export const usernameValidate = async (username: string) => {
    const existingUser = await prismadb.user_miscord_X.findFirst({
        where:{ username }
    })

    if( existingUser) throw new Error(`Username ${username} in used`)
}

export const isUsernameValid = async (username: string) => {
    const existingUser = await prismadb.user_miscord_X.findFirst({
        where:{ username }
    })

    if( !existingUser) throw new Error(`Username ${username} not exist`)
}

export const emailValidate = async ( email: string) => {
    const existingUser = await prismadb.user_miscord_X.findFirst({
        where:{ email }
    })

    if( existingUser) throw new Error(`Email ${email} in used`)
}