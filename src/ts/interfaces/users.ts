export interface Users {
    idUser?: string;
    username: string;
    email?: string | null;
    password: string;
    img?: string | null;
    roleId: string;
    google?: boolean;
    suspencionIsActive: boolean;
    dar_Baja?: boolean;
    updated_At?: Date;
}

export interface Roles {
    idRole?: string;
    role_Name: string;
    create_At?: Date;
}

export interface Todos {
    idTodo?: string;
    userId: string;
    todoName: string;
    Is_Completed ?: boolean;
    update_At?: Date;
}