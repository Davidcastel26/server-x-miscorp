import { Request } from "express";
import { Session } from "express-session";
import { Socket } from "socket.io";

export interface Users {
    idUser?: string;
    username: string;
    password: string;
    roleId: string;
    email?: string | null;
    img?: string | null;
    google?: boolean;
    suspencionIsActive?: boolean;
    dar_Baja?: boolean;
    updated_At?: Date;
}

export interface ExtendedSessionData extends Session {
    user: any;
  }

export interface CustomRequest extends Request {
    session: ExtendedSessionData;
}

export interface CustomSocket extends Socket {
    session: ExtendedSessionData;
}
